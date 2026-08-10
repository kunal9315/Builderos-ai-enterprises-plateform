const jwt = require("jsonwebtoken");
const User = require("../models/User");

const verifyJWT = async (req, res, next) => {
  try {
    const token =
      req.cookies.accessToken ||
      req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Token",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.error(error);

    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};

module.exports = {
  verifyJWT,
};