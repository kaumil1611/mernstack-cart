const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

dotenv.config({ path: "./config.env" });

require("./DB/connection");
app.use(express.json());

app.use(require("./Router/auth"));

const PORT = process.env.PORT;

app.get("/login", (req, res) => {
  res.send("Hello login");
});


app.listen(PORT, () => {
  console.log(`serer is running on port no: ${PORT} `);
});

