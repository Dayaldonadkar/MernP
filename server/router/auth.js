const express = require("express");
const router = express.Router();

require("../db/conn");
const user = require("../model/userSchema");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  console.log("hi from auth");
  res.send("hii from auth");
});

router.post("/regist", (req, res) => {
  // console.log(req.body);
  // res.json({ message: req.body });
  const { name, email, phone, work, password, cpassword } = req.body;
  console.log(name);
  if ((!name, !email, !phone, !work, !password, !cpassword)) {
    // return res.json({ message: "Fill all details properly" });
    return res.status(422).json({ message: "Fill all details properly" });
  }

  user
    .findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ message: "email already exist" });
      }

      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });

      user
        .save()
        .then(() => {
          res.status(201).json("user created");
        })
        .catch((err) => res.status(500).json({ message: "database erroe" }));
    })
    .catch((error) => console.log(error));
});

module.exports = router;
