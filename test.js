// const { MongoClient } = require('mongodb');

// // Replace the following with your MongoDB Atlas connection string
// const uri = 'mongodb+srv://arakhabscs21seecs:rakha12345@webcluster.gneqvc0.mongodb.net/?retryWrites=true&w=majority';

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function run() {
//     try {
//         await client.connect();

//         const database = client.db('webEngDatabase');
//         const collection = database.collection('usersData');
//         const email = "aslam123@mail.com";
//         const password = '12345678';
//         // const query = { email: 'example@example.com' };
//         // const options = { projection: { password: 0 } }; // exclude password field from result

//         const result = await collection.findOne({ email, password });
//         console.log(result);
//     } finally {
//         await client.close();
//     }
// }

// run().catch(console.dir);
let data = JSON.parse(localStorage.getItem('mydata'));
console.log("data", data);
// console.log("data:", data);
// var script2 = document.createElement('script');

// // Set the source of the script to script2.js
// script2.src = 'popup.js';

// // Append the script element to the document's body
// document.body.appendChild(script2);