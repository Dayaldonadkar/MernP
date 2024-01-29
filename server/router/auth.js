const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

require("../db/conn");

const User = require("../model/userSchema");
console.log("User-", User);

router.get("/", (req, res) => {
  console.log("hi from auth");
  res.send("hii from auth");
});

// using async

router.post("/regist", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !password) {
    return res.status(422).json({ message: "All fiels required" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    const phoneExist = await User.findOne({ phone: phone });
    if (userExist || phoneExist) {
      return res.status(409).json({ message: "user already exist" });
    } else if (password != cpassword) {
      return res.status(409).json({ error: "cpassword is not same" });
    } else {
      const userData = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });
      const userRegister = await userData.save();
      if (userRegister) {
        res.status(201).json({ message: "user created successfully" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  // console.log(req.body);
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "Email required" });
    }

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      // console.log(userExist.password, "-UserExist");
      const isMatch = await bcrypt.compare(password, userExist.password);
      if (!isMatch) {
        return res.status(401).json({ error: "invalid credentials password" });
      } else {
        token = await userExist.generateAuthToken();
        console.log(token, "token from auth");
        res.cookie("jwtoke", token, {
          expires: new Date(Date.now() + 22578090080),
          httpOnly: true,
        });
        return res.status(200).json({ message: "login successfully" });
      }
    } else {
      return res.status(400).json({ error: "invalid credentials email" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/about", authenticate, (req, res) => {
  res.send(req.rootUser);
});

router.get("/getData", authenticate, (req, res) => {
  res.send(req.rootUser);
});

router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      console.log("error in contact form");
      return res.json({ error: "plzz filled the contact form " });
    }

    const userContact = await User.findOne({ _id: req.userID });

    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );

      await userContact.save();

      res.status(201).json({ message: "user Contact successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
