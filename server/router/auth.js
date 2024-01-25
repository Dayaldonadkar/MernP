const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

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
    if (userExist) {
      return res.json({ message: "user already exist" });
    } else if (password != cpassword) {
      return res.json({ error: "cpassword is not same" });
    }

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
      res.status(202).json({ message: "user created successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "Email required" });
  }

  const userExist = await User.findOne({ email: email });
  if (userExist) {
    // console.log(userExist.password, "-UserExist");
    const isMatch = await bcrypt.compare(password, userExist.password);
    if (!isMatch) {
      return res.status(400).json({ error: "invalid credentials password" });
    } else {
      return res.status(200).json({ message: "login successfully" });
    }
  } else {
    return res.status(400).json({ error: "invalid credentials email" });
  }
});
module.exports = router;

// using promises
// router.post("/regist", (req, res) => {
//   // console.log(req.body);
//   // res.json({ message: req.body });
//   const { name, email, phone, work, password, cpassword } = req.body;
//   console.log(name);
//   if ((!name, !email, !phone, !work, !password, !cpassword)) {
//     // return res.json({ message: "Fill all details properly" });
//     return res.status(422).json({ message: "Fill all details properly" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ message: "email already exist" });
//       }

//       const use = new User({
//         name,
//         email,
//         phone,
//         work,
//         password,
//         cpassword,
//       });

//       use
//         .save()
//         .then(() => {
//           res.status(201).json("user created");
//         })
//         .catch((err) => res.status(500).json({ message: "database erroe" }));
//     })
//     .catch((error) => console.log(error));
// });
// module.exports = router;
