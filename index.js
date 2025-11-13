const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rwdp740.mongodb.net/?appName=Cluster0`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

let booksCollection;

async function run() {
    try {
        await client.connect();
        booksCollection = client.db("bookHavenDB").collection("books");
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // Add a new book
        app.post("/add-book", async (req, res) => {
            const book = req.body;
            const result = await booksCollection.insertOne(book);
            res.send(result);
        });

        // Get all books
        app.get("/all-books", async (req, res) => {
            const result = await booksCollection.find().toArray();
            res.send(result);
        });

        // Get book details by ID
        app.get("/book-details/:id", async (req, res) => {
            const id = req.params.id;
            const result = await booksCollection.findOne({ _id: new ObjectId(id) });
            res.send(result);
        });

        // Get books added by a specific user
        app.get("/myBooks/:email", async (req, res) => {
            const email = req.params.email;
            const result = await booksCollection.find({ userEmail: email }).toArray();
            res.send(result);
        });

        // Update a book by ID
        app.put("/update-book/:id", async (req, res) => {
            const id = req.params.id;
            const updatedBook = req.body;
            const filter = { _id: new ObjectId(id) };
            const update = { $set: updatedBook };
            const options = { upsert: false };
            const result = await booksCollection.updateOne(filter, update, options);
            res.send(result);
        });

        // Delete a book by ID
        app.delete("/delete-book/:id", async (req, res) => {
            const id = req.params.id;
            const result = await booksCollection.deleteOne({ _id: new ObjectId(id) });
            res.send(result);
        });

    } finally {

    }
}
run().catch(console.dir);

// Root route
app.get("/", (req, res) => {
    res.send("The Book Haven server is running");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});