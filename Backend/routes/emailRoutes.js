const express = require("express");
const router = express.Router();
const emailController = require("./../controllers/emailController");

router.route("/", emailController.sendEmail);

module.exports = router;
