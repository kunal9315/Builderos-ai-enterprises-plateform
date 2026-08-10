const express = require("express");

const {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} = require("../controllers/auth.controller");

const { verifyJWT } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", verifyJWT, logoutUser);
router.get("/me", verifyJWT, getCurrentUser);

module.exports = router;