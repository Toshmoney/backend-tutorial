require("dotenv").config()
const mongoose = require("mongoose");
const pass = process.env.pass

const MONGO_URI = `mongodb+srv://Toshbaba:${pass}@tosh.e022gw2.mongodb.net/backendtutorial?retryWrites=true&w=majority`

const connectDB = async()=>{
   await mongoose.connect(MONGO_URI);
}
module.exports = connectDB;
