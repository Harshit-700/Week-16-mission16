const jwt = require("jsonwebtoken");
const User = require("../models/User");
const AppError = require("../utils/AppError");
const asyncHandler = require("../utils/asyncHandler");
const logger = require("../utils/logger");

function signToken(userId) {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }
  return jwt.sign({ sub: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
}

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const existing = await User.findOne({ email });
  if (existing) {
    throw new AppError("An account with this email already exists", 400);
  }

  // Create new user
  const user = await User.create({ name, email, password });
  const token = signToken(user._id);

  logger.info(`New user registered: ${user.email}`);

  res.status(201).json({
    success: true,
    data: {
      user: { id: user._id, name: user.name, email: user.email },
      token,
    },
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find user and include password field (select: false by default)
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  // Compare passwords
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new AppError("Invalid email or password", 401);
  }

  const token = signToken(user._id);

  logger.info(`User logged in: ${user.email}`);

  res.status(200).json({
    success: true,
    data: {
      user: { id: user._id, name: user.name, email: user.email },
      token,
    },
  });
});

module.exports = { register, login };