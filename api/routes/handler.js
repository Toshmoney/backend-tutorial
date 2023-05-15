const express = require("express");
const {homepage, contact, register} = require("../controller/controller");
const router = express.Router();

router.route("/").get(homepage);
router.route("/contact").get(contact);
router.route("/register").post(register);


module.exports = router;