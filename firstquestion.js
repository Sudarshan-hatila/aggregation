require("mongodb");

const url = "mongodb+srv://sudarshans0302200:yVGJpAuMwVqu9zu9@cluster0.xxhyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const { MongoClient } = require("mongodb");
const client = new MongoClient(url)
const dbName="Companydb"

async function main(){
    try{
        await client.connect()
        console.log("database is connected successfully")
        const db=client.db(dbName)
        const userCollection = db.collection("user");
        const reviewCollection=db.collection("review");
        const paymentCollection=db.collection("payment");
        const orderCollection=db.collection("order");
        const productCollection = db.collection("product");

             // question 1
            //  const result = await userCollection.aggregate([
            //     {$match: {
            //          age: { $gt: 30 } }}
            // ]).toArray();
            // console.log("Succesful",result)
    
    
            // question 2 
            // const res =await ProductCollection.aggregate([
            // {$match:{
            // price:{$gt:10000} }}
            // ]).toArray();
            // console.log(res);
    
    
            // question 3 
            // const result = await ProductCollection.aggregate([
            // {$group:{
            // _id:"$category",
            // total:{$sum:1}}}
            // ]).toArray();
            // console.log(result);
    
    
            // question 4
            // const result = await userCollection.aggregate([
            // {$match:{
            // created_at:{$gt:new Date("2024-01-31T23:59:59Z")}}}
            // ]).toArray();
            // console.log(result);
            // const result = await userCollection.find({}).toArray();
            // console.log("All users:", result);

        //question5
        // const totalProduct=(await productCollection.aggregate([
        //     {$match:{category:{$eq:"Fashion"}}}
        // ]).toArray()).length;
        // console.log(totalProduct);

        // question 6
        // const duplicatecity = await userCollection.aggregate([{$match:{city:"Delhi"}}]).toArray();
        // const duplicatecity2 = await userCollection.aggregate([{$match:{city:"Mumbai"}}]).toArray();
        // console.log("Success",duplicatecity,duplicatecity2);


        // question 7
        // const Highrating = await ProductCollection.aggregate([{$match:{rating:{$gt:4.5}}}]).toArray()
        // console.log(Highrating);

        //question 8
        // const sortProduct=await productCollection.aggregate([
        //     {$sort:{price:-1}}
        // ]).toArray();
        // console.log(sortProduct);

        //question 9
        // const projects=await productCollection.aggregate([
        //     {$project:{name:1,price:1,_id:0}}
        // ]).toArray();
        // console.log(projects);

        //question 10
        // const avgPrice=await productCollection.aggregate([
        //     {$group:{_id:null,
        //         averagePrice:{$avg:"$price"}
        //     }}
        // ]).toArray();
        // console.log("done avg",avgPrice);

        //question 11
        // const mostExpensiveProduct=await productCollection.aggregate([
        //     {$group:{
        //         _id:"$category",
        //         expensiveProduct:{$max:"$price"}}
        //     }
        // ]).toArray();
        // console.log(mostExpensiveProduct)
         // 12. Count how many users have placed an order.
        //  const result = await orderCollection.aggregate([
        //     { $group: { _id: "$user_id" } },
        //     { $count: "uniqueUsers" }
        // ]).toArray();
        // console.log("Number of users who placed an order:", result);

        // 13. Get total sales amount for all orders.
        // const result = await orderCollection.aggregate([
        //     { $lookup: { from: "PaymentCollection", localField: "_id", foreignField: "order_id", as: "payment" } },
        //     { $unwind: "$payment" },
        //     { $group: { _id: null, totalSales: { $sum: "$payment.amount" } } }
        // ]).toArray();
        // console.log("Total sales amount for all orders:", result);

        // 14. Find orders that are still pending.
        // const result = await orderCollection.aggregate([
        //     { $match: { status: "Pending" } }
        // ]).toArray();
        // console.log("Pending orders:", result);

        // 15. Find total earnings from delivered orders.
        // const result = await orderCollection.aggregate([
        //     { $match: { status: "Delivered" } },
        //     { $lookup: { from: "PaymentCollection", localField: "_id", foreignField: "order_id", as: "payment" } },
        //     { $unwind: "$payment" },
        //     { $group: { _id: null, totalEarnings: { $sum: "$payment.amount" } } }
        // ]).toArray();
        // console.log("Total earnings from delivered orders:", result);

        // 16. Find top 3 most expensive products.
        // const result = await productCollection.aggregate([
        //     { $sort: { price: -1 } },
        //     { $limit: 3 }
        // ]).toArray();
        // console.log("Top 3 most expensive products:", result);

        // 17. Find users who haven't placed an order.
        // const result = await userCollection.aggregate([
        //     { $lookup: { from: "OrderCollection", localField: "_id", foreignField: "user_id", as: "orders" } },
        //     { $match: { orders: { $size: 0 } } }
        // ]).toArray();
        // console.log("Users who haven't placed an order:", result);

        // 18. Count how many orders were paid using UPI.
        // const result = await paymentCollection.aggregate([
        //     { $match: { payment_method: "UPI" } },
        //     { $count: "totalUPI" }
        // ]).toArray();
        // console.log("Total orders paid via UPI:", result);

        // 19. Find total revenue per category.
        // const result = await orderCollection.aggregate([
        //     { $lookup: { from: "ProductCollection", localField: "product_id", foreignField: "_id", as: "product" } },
        //     { $unwind: "$product" },
        //     { $group: { _id: "$product.category", totalRevenue: { $sum: "$product.price" } } }
        // ]).toArray();
        // console.log("Total revenue per category:", result);

        // 20. Get all payments with a successful status.
        // const result = await paymentCollection.aggregate([
        //     { $match: { status: "Success" } }
        // ]).toArray();
        // console.log("Successful payments:", result);

        // 21. Join users with their orders.
        // const result = await userCollection.aggregate([
        //     { $lookup: { from: "OrderCollection", localField: "_id", foreignField: "user_id", as: "orders" } }
        // ]).toArray();
        // console.log("Users with their orders:", result);

        // 22. Show all orders with user details.
        // const result = await orderCollection.aggregate([
        //     { $lookup: { from: "UserCollection", localField: "user_id", foreignField: "_id", as: "user" } },
        //     { $unwind: "$user" }
        // ]).toArray();
        // console.log("Orders with user details:", result);

        // 23. Show products with their reviews.
        // const result = await productCollection.aggregate([
        //     { $lookup: { from: "ReviewCollection", localField: "_id", foreignField: "product_id", as: "reviews" } }
        // ]).toArray();
        // console.log("Products with reviews:", result);

        // 24. Find the highest-rated product.
        // const result = await productCollection.aggregate([
        //     { $sort: { rating: -1 } },
        //     { $limit: 1 }
        // ]).toArray();
        // console.log(result);

        // 25. Find the most frequently ordered product.
        // const result = await orderCollection.aggregate([
        //     { $group: { _id: "$product_id", orderCount: { $sum: 1 } } },
        //     { $sort: { orderCount: -1 } },
        //     { $limit: 1 }
        // ]).toArray();
        // console.log(result);

        // 26. Get total payment amount per user.
        // const result = await orderCollection.aggregate([
        //     { $lookup: { from: "PaymentCollection", localField: "_id", foreignField: "order_id", as: "payment" } },
        //     { $unwind: "$payment" },
        //     { $group: { _id: "$user_id", totalAmount: { $sum: "$payment.amount" } } }
        // ]).toArray();
        // console.log(result);

        // 27. Find users who paid via credit card.
        // const result = await paymentCollection.aggregate([
        //     { $match: { payment_method: "Credit Card" } },
        //     { $lookup: { from: "UserCollection", localField: "user_id", foreignField: "_id", as: "user" } },
        //     { $unwind: "$user" }
        // ]).toArray();
        // console.log(result);

        // 28. Find users who gave a review rating less than 3.
        // const result= await reviewCollection.aggregate([
        //     { $match: { rating: { $lt: 3 } } },
        //     { $lookup: { from: "UserCollection", localField: "user_id", foreignField: "_id", as: "user" } },
        //     { $unwind: "$user" }
        // ]).toArray();
        // console.log(result);

        // 29. Get the most ordered product category.
        // const result = await orderCollection.aggregate([
        //     { $lookup: { from: "ProductCollection", localField: "product_id", foreignField: "_id", as: "product" } },
        //     { $unwind: "$product" },
        //     { $group: { _id: "$product.category", orderCount: { $sum: 1 } } },
        //     { $sort: { orderCount: -1 } },
        //     { $limit: 1 }
        // ]).toArray();
        // console.log(result);
        




//question  37
//find all users who placed order
// const result=await orderCollection.aggregate([
//     {$match:{order_date:{$gte:new Date(new Date().setDate(new Date().getDate()-30))}}},
//     {$group:{_id:"users_id"}}
// ]).toArray();
// console.log(result);

//question 39
//how maany order cancelled
// const result=await orderCollection.aggregate([
//     {$match:{status:"cancelled"}},
//     {$count:"totalCancelledorder"}
// ]).toArray();
// console.log(result);

// question 41
// const result = await orderCollection.aggregate([
//     { 
//       $match: {
//         order_date: {
//           $gte: new Date("2024-03-01T00:00:00Z"),
//           $lt: new Date("2024-04-01T00:00:00Z")
//         }
//       }
//     }
//   ]).toArray();
//   console.log("Orders placed in March 2024:", result);
  
  //42
//   const result = await productCollection.aggregate([
//     {
//       $match: {
//         created_at: { $gte: new Date(new Date().setMonth(new Date().getMonth() - 6)) }
//       }
//     },
//     { $count: "totalProducts" }
//   ]).toArray();
//   console.log("Total products added in the last 6 months:", result);
  
  // 43
//   const result = await userCollection.aggregate([
//     {
//       $match: {
//         created_at: { $gte: new Date(new Date().setFullYear(new Date().getFullYear() - 1)) }
//       }
//     }
//   ]).toArray();
//   console.log(result);
  
  // 44. Count how many payments were made in January 2024.
  const result = await paymentCollection.aggregate([
    {
      $match: {
        payment_date: {
          $gte: new Date("2024-01-01T00:00:00Z"),
          $lt: new Date("2024-02-01T00:00:00Z")
        }
      }
    },
    { $count: "totalPayments" }
  ]).toArray();
  console.log("Total payments made in January 2024:",result);
  
  // 45. Get the total revenue generated in the last quarter.
  const totalRevenue = await paymentCollection.aggregate([
    {
      $match: {
        payment_date: {
          $gte: new Date(new Date().setMonth(new Date().getMonth() - 3))
        }
      }
    },
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$amount" }
      }
    }
  ]).toArray();
  console.log("Total revenue generated in the last quarter:", totalRevenue);
  
  // 46
  const ordersAbove25000 = await orderCollection.aggregate([
    {
      $lookup: {
        from: "ProductCollection",
        localField: "product_id",
        foreignField: "_id",
        as: "productDetails"
      }
    },
    {
      $unwind: "$productDetails"
    },
    {
      $match: {
        "productDetails.price": { $gt: 25000 }
      }
    }
  ]).toArray();
  console.log("Orders with product price above ₹25,000:", ordersAbove25000);
  
  // 47
  const usersWithoutReviews = await userCollection.aggregate([
    {
      $lookup: {
        from: "ReviewCollection",
        localField: "_id",
        foreignField: "user_id",
        as: "userReviews"
      }
    },
    {
      $match: {
        "userReviews": { $size: 0 }
      }
    }
  ]).toArray();
  console.log("Users who haven't reviewed any product:", usersWithoutReviews);
  
  // 48 Find the number of products ordered per month in 2024.
  const productsOrderedPerMonth = await orderCollection.aggregate([
    {
      $match: {
        order_date: { $gte: new Date("2024-01-01T00:00:00Z"), $lt: new Date("2025-01-01T00:00:00Z") }
      }
    },
    {
      $group: {
        _id: { $month: "$order_date" },
        totalProductsOrdered: { $sum: "$quantity" }
      }
    },
    { $sort: { "_id": 1 } }
  ]).toArray();
  console.log("Number of products ordered per month in 2024:", productsOrderedPerMonth);
  
  // 49
//   const result = await orderCollection.aggregate([
//     {
//       $group: {
//         _id: "$user_id",
//         orderCount: { $sum: 1 }
//       }
//     },
//     { $sort: { orderCount: -1 } },
//     { $limit: 1 }
//   ]).toArray();
//   console.log(result);
  
  // 50. Get the product with the highest review count.
  const productWithHighestReviews = await reviewCollection.aggregate([
    {
      $group: {
        _id: "$product_id",
        reviewCount: { $sum: 1 }
      }
    },
    { $sort: { reviewCount: -1 } },
    { $limit: 1 }
  ]).toArray();
  
  const highestReviewProduct = await productCollection.findOne({ _id: productWithHighestReviews[0]._id });
  console.log("Product with the highest review count:", highestReviewProduct);
  

await userCollection.insertMany([
{ _id: 1, name: "Amit", age: 25, city: "Delhi", email: "amit@gmail.com",
created_at: "2024-01-10T10:00:00Z" },
{ _id: 2, name: "Suman", age: 30, city: "Mumbai", email: "suman@yahoo.com",
created_at: "2023-12-15T12:30:00Z" },
{ _id: 3, name: "Ravi", age: 22, city: "Bangalore", email: "ravi@gmail.com",
created_at: "2024-02-20T08:45:00Z" },
{ _id: 4, name: "Priya", age: 27, city: "Kolkata", email: "priya@hotmail.com",
created_at: "2024-03-01T15:20:00Z" },
{ _id: 5, name: "Vikram", age: 35, city: "Pune", email: "vikram@gmail.com",
created_at: "2023-11-05T18:10:00Z" },
{ _id: 6, name: "Neha", age: 29, city: "Chennai", email: "neha@gmail.com",
created_at: "2024-02-28T09:15:00Z" },
{ _id: 7, name: "Rahul", age: 32, city: "Hyderabad", email: "rahul@gmail.com",
created_at: "2024-01-25T14:05:00Z" }
])

          await reviewCollection.insertMany([
            { _id: 401, user_id: 1, product_id: 101, rating: 5, comment: "Excellent laptop!" },
            { _id: 402, user_id: 2, product_id: 102, rating: 4, comment: "Good phone, but battery could be better." },
            { _id: 403, user_id: 3, product_id: 103, rating: 3, comment: "Average quality shoes." },
            { _id: 404, user_id: 4, product_id: 104, rating: 4, comment: "Nice watch, looks premium." },
            { _id: 405, user_id: 5, product_id: 105, rating: 5, comment: "Amazing TV, great display!" }
          ])

          await paymentCollection.insertMany([
            { _id: 301, order_id: 201, amount: 50000, payment_method: "Credit Card",
                payment_date: "2024-03-02T12:30:00Z", status: "Success" },
                { _id: 302, order_id: 202, amount: 40000, payment_method: "UPI",
                payment_date: "2024-03-05T16:00:00Z", status: "Pending" },
                { _id: 303, order_id: 203, amount: 9000, payment_method: "Debit Card",
                payment_date: "2024-03-10T09:45:00Z", status: "Failed" }
                
          ])

          await orderCollection.insertMany([
            { _id: 201, user_id: 1, product_id: 101, quantity: 1, order_date:
                "2024-03-02T12:00:00Z", status: "Delivered" },
                { _id: 202, user_id: 2, product_id: 102, quantity: 2, order_date:
                "2024-03-05T15:45:00Z", status: "Shipped" },
                { _id: 203, user_id: 3, product_id: 103, quantity: 3, order_date:
                "2024-03-10T09:30:00Z", status: "Pending" },
                { _id: 204, user_id: 4, product_id: 104, quantity: 1, order_date:
                "2024-03-12T11:15:00Z", status: "Delivered" },
                { _id: 205, user_id: 5, product_id: 105, quantity: 1, order_date:
                "2024-03-14T08:50:00Z", status: "Cancelled" }
                
          ])

          await productCollection.insertMany([
            { _id: 101, name: "Laptop", category: "Electronics", price: 50000, stock: 10,
                rating: 4.5 },
                { _id: 102, name: "Mobile", category: "Electronics", price: 20000, stock: 15,
                rating: 4.2 },
                { _id: 103, name: "Shoes", category: "Fashion", price: 3000, stock: 50, rating:
                4.0 },
                { _id: 104, name: "Watch", category: "Fashion", price: 7000, stock: 30, rating:
                4.3 },
                { _id: 105, name: "TV", category: "Electronics", price: 40000, stock: 5, rating: 4.6
                },
                { _id: 106, name: "Headphones", category: "Electronics", price: 2500, stock: 25,
                rating: 4.1 },
                { _id: 107, name: "Jeans", category: "Fashion", price: 1500, stock: 60, rating: 4.0
                },
                { _id: 108, name: "T-Shirt", category: "Fashion", price: 1200, stock: 70, rating:
                3.9 },
                { _id: 109, name: "Refrigerator", category: "Appliances", price: 30000, stock: 8,
                rating: 4.7 },
                { _id: 110, name: "Microwave", category: "Appliances", price: 10000, stock: 12,
                rating: 4.4 }
                
          ])
        
console.log("data has been successuffuly inserted in collection")
        }
        catch(error){
            console.log(error);
        }
        finally{
            await client.close();
        }
    }
    
    main().catch(console.error);
