const jwt = require("jsonwebtoken");
const User = require("../Model/userSchema");
const Authentication = async (req, res, next) => {
  try {
    const token = req.cookies.jwt_token;
    console.log("----", token);
    const verifyToken = jwt.verify(token, process.env.PRIVATE_KEY);
    const main_user = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    console.log("hello");
    if (!main_user) {
      throw new Error("User not found");
    }
    console.log(token, "this is token");
    req.token = token;
    req.main_user = main_user;
    req.userId = main_user._id;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized: No token found");
  }
};

module.exports = Authentication;
