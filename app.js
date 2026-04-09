const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const Listing = require('./models/listing');

const MONGO_URL = "mongodb://localhost:27017/wanderlust";

main().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB:", err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get('/', (req, res) => {
    res.send("Hi, I am root")
})

app.get('/testListing', async (req, res) => {
    let sampleListing = new Listing({
        title: "My new Villa",
        description: "By the Beach",
        price: 1200,
        location: "Calangute, Goa",
        country: "India",
    })
    await sampleListing.save();
    console.log("Saved sample listing to database");
    res.send("Saved sample listing to database");
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})