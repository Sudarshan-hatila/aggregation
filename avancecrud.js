 const url=''
const { MongoClient } = require('mongodb');
const Client=new MongoClient(url);
async function insertStudent() {
    const client = new MongoClient('mongodb://localhost:27017');  
    try {
        await client.connect();
        const database = client.db('school'); 
        const studentsCollection = database.collection('students');  

        const student = {
            name: 'John Doe',
            age: 20,
            grade: 'A'
        };

        if (student.age >= 18) {
            const result = await studentsCollection.insertOne(student);
            console.log(`Student inserted with _id: ${result.insertedId}`);
        } else {
            console.log('Age is less than 18. Insertion rejected.');
        }
    } catch (error) {
        console.error('Error occurred:', error);
    } finally {
        await client.close();
    }
}

insertStudent();
