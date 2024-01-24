const express = require("express");
const router = express.Router();

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
      res.status(402).json({ message: "user created successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

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

module.exports = router;
