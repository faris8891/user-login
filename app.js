const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("express connected");
});

// ----------------------

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

// --------------------

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/login_user").then(() => {
  console.log("db connected");
});

// --------------------

const login = require("./router/R_login");
app.use("/login", login);