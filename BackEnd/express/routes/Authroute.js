const express = require("express");
const router = express.Router();
const { registeruser,login } = require("../controller/user");

router.post("/register", registeruser);
router.get("/login",login)
module.exports = router;