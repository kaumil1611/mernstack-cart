const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });

require("./DB/connection");
app.use(express.json());
// const User = require("./Model/userSchema");
app.use(require("./Router/auth"));
const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  console.log("middleware");
};
middleware();

app.get("/login", middleware, (req, res) => {
  res.send("Hello login");
});

app.get("/cart", (req, res) => {
  res.send("Hello login");
});

app.listen(PORT, () => {
  console.log(`serer is running on port no: ${PORT} `);
});
console.log("kaumil");
