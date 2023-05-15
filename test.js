const { MongoClient } = require('mongodb');

// Replace the following with your MongoDB Atlas connection string
const uri = 'mongodb+srv://arakhabscs21seecs:rakha12345@webcluster.gneqvc0.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();

        const database = client.db('webEngDatabase');
        const collection = database.collection('usersData');
        const email = "aslam123@mail.com";
        const password = '12345678';
        // const query = { email: 'example@example.com' };
        // const options = { projection: { password: 0 } }; // exclude password field from result

        const result = await collection.findOne({ email, password });
        console.log(result);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
