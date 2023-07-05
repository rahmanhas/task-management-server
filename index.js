const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
require('dotenv').config()

app.use(cors())

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER_ID}:${process.env.USER_PASSWORD}@cluster0.di1kiaj.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      //await client.connect();





      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {

     // await client.close();
    }
  }
  run().catch(console.dir);
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/', (req, res) => {
    res.send('Got a POST request')
  })
  app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  })
  app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})