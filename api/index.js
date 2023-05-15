const express = require("express");
const router = require("./routes/handler");
const app = express();
const port = 1200;
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./db/connect");

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port, async()=>{
    await connectDB()
    console.log("DB connected successfully!");
    console.log(`Server started successfully on port ${port}...`);
})