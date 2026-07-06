const rateLimit = require("express-rate-limit");


function rateLimitHandler(req, res) {
  res.status(429).json({
    success: false,
    error: {
      message: "Too many requests. Please slow down and try again shortly.",
    },
  });
}


const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10, 
  standardHeaders: true,
  legacyHeaders: false,
  handler: rateLimitHandler,
  message: "Too many login attempts, please try again later.",
});


const aiLimiter = rateLimit({
  windowMs: 60 * 1000, 
  max: 5, 
  standardHeaders: true,
  legacyHeaders: false,
  handler: rateLimitHandler,
  message: "Too many AI requests, please slow down.",
});

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  handler: rateLimitHandler,
});

module.exports = { loginLimiter, aiLimiter, globalLimiter };
