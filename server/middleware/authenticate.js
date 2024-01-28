const User = require("../model/userSchema");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const Authenticate = async (req, res, next) => {
  try {
    cookieParser()(req, res, () => {});
    const token = req.cookies.jwtoke;
    console.log(token, "token");
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("user not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser.id;
    next();
  } catch (error) {
    res.status(401).send("unauthorized");
    console.log(error);
  }
};

module.exports = Authenticate;
