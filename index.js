//console.log("hello coders ")
//how to connect mongodb
require("mongodb");
const url="mongodb+srv://sudarshans0302200:yVGJpAuMwVqu9zu9@cluster0.xxhyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const {MongoClient}= require("mongodb");
const client=new MongoClient(url);
const dbname="users"
async function main() {
    try{
       await client.connect();
       console.log("Database is connected successfully");
       const db=client.db(dbname);
       const userCollection= db.collection("users");    
       const productsCollection = db.collection("products");

    //    const result= await userCollection.aggregate([
    //     {$match:{age:{$gt:3}}}
    //    ]).toArray();

    // const result =await productsCollection.aggregate([
    //     {$sort:{price:-1}}
    // ]).toArray();
    //    console.log(result)

    //    const result=await productsCollection.aggregate([
    //     {$project:{name:1,category:1,price:1,_id:0}}
    //    ]).toArray();
    //    console.log(result)

        // const result=await userCollection.aggregate([
        //     {$lookup:{
        //         from:"products",
        //         localField:"_id",
        //         foreingField:"usera_id",
        //         as:"pruchasedProducts"
        //     }},
        //     {$unwind:"$pruchasedProducts"}
        // ]).toArray();
        // console.log(result)
        
    //    const result=await userCollection.aggregate([
    //     {$limit:2}
    //    ]).toArray();
    //    console.log(result)

       //when we have to skip some documents from starting or end at that time we have to use ski
    //    const res=await userCollection.aggregate([
    //     {$skip:2},
    //     {$skip:3}
    //    ]).toArray();
    //    console.log(res);
       //unwind we will use skip method->pageination
       //out method
       //when we have to basicaly store our aggeregation result in new collection at hat time w have to use out method

    //    const res= await userCollection.aggregate([
    //     {$match:{age:{$gt:30}}},
    //     {$out:"buddhe_log"}
    //    ]).toArray();
    //    console.log(res);

    //add field method
    //it is used when we have to add a new entry to tyhe collection

    // const res=await userCollection.aggregate([
    //     {$addFields:{isAdult:{$gte:["age",30]}}}
    // ]).toArray();
    // console.log(res)

//facet method->when we have to run multiple pipeline at same point of time ,then we use facet method
// const result=await userCollection.aggregate([
//     {$facet:{
//         "jawanstudents":[{$match:{age:{$lt:25}}}],
//         "buddestudents":[{$match:{age:{$lt:30}}}]
//     }}
// ]).toArray();
// console.log(result);

//bucket method->when we have to divide students on the basis of any particular range at that time we will use bucket method
// const result=await userCollection.aggregate([
//     {$bucket:{
//         groupBy:"$age",
//         boundries:[10,20,30,40,50],
//         default:"other",
//         output:{count:{$sum:1}}
//     }}
// ]).toArray();
// console.log(result);


//bucketauto method->it we make khud bucket
// const result=await userCollection.aggregate([
//     {$bucketAuto:{
//         groupby:"$age",
//         buckets:3
//     }}
// ]).toArray();
// console.log(result);

//touper case/tolower case method



//question  37
//find all users who placed order
// const result=await orderColl



// const result=await userCollection.aggregate([
//     {$projects:{
//           nameUpper:{$toUpper:"$name"}
//     }}
// ]).toArray();
// console.log(result);


       console.log("data has been inserted succsesfully");
       await userCollection.insertMany(
            [
                { _id: 1, name: "Amit", age: 25, city: "Delhi" },
                { _id: 2, name: "Suman", age: 30, city: "Mumbai" },
                { _id: 3, name: "Ravi", age: 22, city: "Bangalore" },
                { _id: 4, name: "Priya", age: 27, city: "Kolkata" },
                { _id: 5, name: "Vikram", age: 35, city: "Pune" },
                { _id: 6, name: "Neha", age: 29, city: "Chennai" },
                { _id: 7, name: "Rahul", age: 32, city: "Hyderabad" },
                { _id: 8, name: "Swati", age: 24, city: "Jaipur" },
                { _id: 9, name: "Anil", age: 40, city: "Ahmedabad" },
                { _id: 10, name: "Pooja", age: 26, city: "Indore" }
              ]  );
             await productsCollection.insertMany(
             [
                { _id: 101, name: "Laptop", category: "Electronics", price: 50000, user_id: 1 },
                { _id: 102, name: "Mobile", category: "Electronics", price: 20000, user_id: 2 },
                { _id: 103, name: "Shoes", category: "Fashion", price: 3000, user_id: 3 },
                { _id: 104, name: "Watch", category: "Fashion", price: 7000, user_id: 4 },
                { _id: 105, name: "TV", category: "Electronics", price: 40000, user_id: 5 },
                { _id: 106, name: "Headphones", category: "Electronics", price: 2500, user_id: 6 },
                { _id: 107, name: "Jeans", category: "Fashion", price: 1500, user_id: 7 },
                { _id: 108, name: "T-Shirt", category: "Fashion", price: 1200, user_id: 8 },
                { _id: 109, name: "Refrigerator", category: "Appliances", price: 30000, user_id: 9 },
                { _id: 110, name: "Microwave", category: "Appliances", price: 10000, user_id: 10 }
              ]);
      
 console.log("inserted")
    }catch(error){
        console.log(error)
    }finally{
        await client.close();
    }
    
}
main().catch(console.error);