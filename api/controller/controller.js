const User = require("../model/model");

const homepage = async(req, res)=>{
    await res.status(200).json({msg: "Hello world"})
}

const getAllUsers = async(req, res)=>{
   const allUsers = await User.find();
   res.status(200).json(allUsers)
};

const getSingleUser = async(req, res)=>{
    const requestedUser = req.params['user']
    const foundUser = await User.findOne({username:requestedUser});
    if(!foundUser){
        console.log( "User not found")
    }
    res.status(200).json(foundUser)
};



const register = async(req, res)=>{
    const {username, password, email} = req.body;
    const userInfo = await User.create({username, password, email});
    res.status(200).json({Requseted: userInfo})
}
module.exports = {getAllUsers, homepage, register, getSingleUser}