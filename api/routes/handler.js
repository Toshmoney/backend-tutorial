const express = require("express");
const {homepage, register, getAllUsers, getSingleUser} = require("../controller/controller");
const router = express.Router();

router.route("/").get(homepage);
router.route("/users").get(getAllUsers);
router.route("/register").post(register);
router.route("/user/:user").get(getSingleUser);


module.exports = router;