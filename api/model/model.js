const mongoose = require("mongoose");
const {Schema, model} = mongoose

const userSchema = new Schema({
    username: {
        required: [true, 'Username is required!'],
        type: String,
        unique: true,
        min: 4
    },
    password:{
        required:[true, 'password is required!'],
        type: String,
        min: 4,
    },

    email: {
        type: String,
        required: true
    }
});
const User = model("users", userSchema)
module.exports = User;
