require("mongodb");
const url = "mongodb+srv://sudarshans0302200:yVGJpAuMwVqu9zu9@cluster0.xxhyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const { MongoClient } = require("mongodb");
const client = new MongoClient(url);
const dbname = "users";

async function main() {
  try {
    await client.connect();
    console.log("Database is connected successfully");

    const db = client.db(dbname);
    const userCollection = db.collection("users");
    const productsCollection = db.collection("products");

    const result = await userCollection.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "user_id", 
          as: "purchasedProducts"  
        }
      },
      { $unwind: "$purchasedProducts" }
    ]).toArray();

    console.log(result);
    console.log("Data has been retrieved successfully");

    await userCollection.insertMany([
        { _id: 1, name: "Amit", age: 25, city: "Delhi" },
        { _id: 2, name: "Suman", age: 30, city: "Mumbai" },
        { _id: 3, name: "Ravi", age: 22, city: "Bangalore" },
        { _id: 4, name: "Priya", age: 27, city: "Kolkata" },
        { _id: 5, name: "Vikram", age: 35, city: "Pune" },
        { _id: 6, name: "Neha", age: 29, city: "Chennai" },
        { _id: 7, name: "Rahul", age: 32, city: "Hyderabad" },
        { _id: 8, name: "Swati", age: 24, city: "Jaipur" },
        { _id: 9, name: "Anil", age: 40, city: "Ahmedabad" },
        { _id: 10, name: "Pooja", age: 26, city: "Indore" }
      ]);

    await productsCollection.insertMany([
      { _id: 101, name: "Laptop", category: "Electronics", price: 50000, user_id: 1 },
      { _id: 102, name: "Mobile", category: "Electronics", price: 20000, user_id: 2 },
      { _id: 103, name: "Shoes", category: "Fashion", price: 3000, user_id: 3 },
      { _id: 104, name: "Watch", category: "Fashion", price: 7000, user_id: 4 },
      { _id: 105, name: "TV", category: "Electronics", price: 40000, user_id: 5 },
      { _id: 106, name: "Headphones", category: "Electronics", price: 2500, user_id: 6 },
      { _id: 107, name: "Jeans", category: "Fashion", price: 1500, user_id: 7 },
      { _id: 108, name: "T-Shirt", category: "Fashion", price: 1200, user_id: 8 },
      { _id: 109, name: "Refrigerator", category: "Appliances", price: 30000, user_id: 9 },
      { _id: 110, name: "Microwave", category: "Appliances", price: 10000, user_id: 10 }
    ]);

    console.log("Data has been inserted succesfully");

  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
