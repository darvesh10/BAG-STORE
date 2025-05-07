const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register route
router.post("/register", async function (req, res) {
  try {
    const { email, fullname, password } = req.body;

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await userModel.create({
      email,
      fullname,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = jwt.sign(
      { email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Set cookie
    res.cookie("token", token);
    res.send("User Created");

  } catch (err) {
    res.status(500).send(err.message || "Internal Server Error");
  }
});

// Basic route
router.get("/", (req, res) => {
  res.send("hey");
});


router.post("/login", async function (req, res) {
let { email, password } = req.body;
 let user = await userModel.findOne({ email: email })
    if (!user)  return res.status(400).send("User not found");
    
    const isMatch = await bcrypt.compare(password, user.password, function(err,result){
        res.send(result);
    });
}); 















module.exports = router;












































































































































































