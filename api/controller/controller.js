const User = require("../model/model");

const homepage = async(req, res)=>{
    await res.status(200).json({msg: "Hello world"})
}

const contact = async(req, res)=>{
    await res.status(200).json({msg: "Contact Page"})
};

const register = async(req, res)=>{
    const {username, password, email} = req.body;
    const userInfo = await User.create({username, password, email});
    res.status(200).json({Requseted: userInfo})
}
module.exports = {contact, homepage, register}