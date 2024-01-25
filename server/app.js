const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");

const app = express();
dotenv.config({ path: "./config.env" });
require("./db/conn");
// const DB =
//   "mongodb+srv://dayaltweet:PfgHQlPGfjleSALX@cluster0.aypusxt.mongodb.net/?mernstack?retryWrites=true&w=majority";
// console.log(process.env.DATABASE);
const DB = process.env.DATABASE;
const port = process.env.PORT;
const User = require("./model/userSchema");

app.use(express.json());
app.use(require("./router/auth"));

// middlewares
const middleware = (req, res, next) => {
  console.log("hi from middleware");
  next();
};

// middleware();

app.get("/", (req, res) => {
  res.send("hi from dayal donma");
});

app.get("/about", middleware, (req, res) => {
  res.send("hi from about");
  console.log("hi from about");
});

app.get("/contact", (req, res) => {
  res.send("hi from contact");
});

// app.get("/login", (req, res) => {
//   res.send("hi from login");
// });

// app.get("/register", (req, res) => {
//   res.send("hi from login");
// });

app.listen(port, () => {
  console.log(`port started on ${port}`);
});
