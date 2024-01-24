const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("hi from auth");
  res.send("hii from auth");
});

router.post("/regist", (req, res) => {
  console.log(req.body);
  res.json({ message: req.body });
});

module.exports = router;
