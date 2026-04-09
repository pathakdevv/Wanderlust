const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');

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


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})