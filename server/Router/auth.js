const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

require("../DB/connection");
const User = require("../Model/userSchema");
const authentication = require("../Middleware/authentication");

router.post("/register", async (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) {
    return res.status(422).json({ errMsg: "Please Enter Remaining Data." });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res
        .status(422)
        .json({ errMsg: "Email Already Exist, Please Login Directly." });
    }

    const user = new User({ name, email, phone, password });
    const userRegister = await user.save();
    if (userRegister) {
      res.status(201).json({ successMessage: "User Created Successfully." });
    }
  } catch (err) {
    console.log("error in user register ", err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(422).json({ errMsg: "Please Enter Remaining Data." });
    }
    const userLogin = await User.findOne({ email: email });

    if (!userLogin) {
      res.status(400).json({ successMessage: "No such user exists." });
    } else {
      const userPassword = userLogin.password;
      const passwordCheck = await bcrypt.compare(password, userPassword);
      const tokenGeneration = await userLogin.generateAuthToken();
      res.cookie("jwt_token", tokenGeneration, {
        httpOnly: true,
      });
      if (!passwordCheck) {
        res.status(401).json({ successMessage: "Password Not Match." });
      } else {
        res.status(201).json({
          successMessage: "User Login Successfully.",
          token: tokenGeneration,
        });
      }
    }
  } catch (err) {
    console.log("error in user login ", err);
  }
});

router.get("/cart", authentication, (req, res) => {
  // console.log("hello");
  res.send("Hello cart");
});

router.get("/", authentication, (req, res) => {
  res.send("Hello Kaumil");
});

router.get("/home", authentication, (req, res) => {
  res.send(req.main_user);
});

router.get("/logout", (req, res) => {
  res.clearCookie("jwt_token", { path: "/" });
  res.status(200).send("User Logout Successfully");
});

module.exports = router;
