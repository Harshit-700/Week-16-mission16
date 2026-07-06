const express = require("express");
const { register, login } = require("../controllers/auth.controller");
const validate = require("../middleware/validate");
const { registerSchema, loginSchema } = require("../validators/schemas");
const { loginLimiter } = require("../middleware/rateLimiter");

const router = express.Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", loginLimiter, validate(loginSchema), login);

module.exports = router;
