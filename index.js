const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;
require('dotenv').config()
const app = express();

//middleware
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.i8hxp3j.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

 

async function run(){
    try{
    const projectsCollections = client.db('MyUpdateProtfolio').collection('ProjectsDetails')
     
        app.get('/projects', async(req, res) => {
            const query ={}
            const projects = await projectsCollections.find(query).toArray()
            res.send(projects)
        })

        

    }
    finally{

    }
}
run().catch(error => console.log(error))




//test
app.get('/', async (req, res) => {
    res.send(' database running')
})

app.listen(port, () => console.log(` database running on ${port}`))