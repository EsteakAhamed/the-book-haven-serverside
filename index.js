require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// MongoDB client
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

let db;

// Connect once and reuse
async function connectDB() {
    try {
        await client.connect();
        db = client.db("bookHavenDB");
        console.log("✅ Connected to MongoDB Atlas");
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err);
    }
}
connectDB();

// Routes
app.get("/", (req, res) => {
    res.send("📚 The Book Haven server is running");
});

app.get("/books", async (req, res) => {
    try {
        const books = await db.collection("books").find().toArray();
        res.send(books);
    } catch (err) {
        res.status(500).send({ error: "Failed to fetch books" });
    }
});

// Start server
app.listen(port, () => {
    console.log(`🚀 Server listening on port ${port}`);
});