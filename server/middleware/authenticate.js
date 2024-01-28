const User = require("../model/userSchema");
const jwt = require("jsonwebtoken");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verify = jwt.verify(token, env.process.SECRET_KEY);
    const rootUser = await User.findOne({
      _id: verifyToken.id,
      "tokens.token": token,
    });

    if (rootUser) {
      throw new error("user not found");
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
