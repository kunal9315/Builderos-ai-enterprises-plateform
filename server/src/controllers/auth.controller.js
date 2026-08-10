const User = require("../models/User");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

// Register User
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(409, "User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    // role: role || "user",
  });

  return res.status(201).json(
    new ApiResponse(201, "User registered successfully", {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    })
  );
});

// Login User
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid email or password");
  }

  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  const cookieOptions = {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  };

  res.cookie("accessToken", accessToken, cookieOptions);
  res.cookie("refreshToken", refreshToken, cookieOptions);

  return res.status(200).json(
    new ApiResponse(200, "Login successful", {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      accessToken,
    })
  );
});

// Logout
const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, {
    refreshToken: "",
  });

  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");

  return res
    .status(200)
    .json(new ApiResponse(200, "Logged out successfully"));
});

// Current User
const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, "Current user fetched", req.user));
});

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};