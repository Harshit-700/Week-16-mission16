const logger = require("../utils/logger");

// Global Error Handler - must accept all 4 parameters
function errorHandler(err, req, res, next) {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";
  let details = err.details || null;

  // Handle Mongoose CastError
  if (err.name === "CastError") {
    statusCode = 400;
    message = "Invalid identifier format";
  }

  // Handle Mongoose Duplicate Key Error
  if (err.code === 11000) {
    statusCode = 400;
    message = "Duplicate field value";
    details = err.keyValue;
  }

  // Handle Mongoose ValidationError
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = "Database validation failed";
    details = Object.values(err.errors).map((e) => e.message);
  }

  // Handle JWT errors
  if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Invalid token";
  }

  if (err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Token has expired";
  }

  // Log based on severity
  if (statusCode >= 500) {
    logger.error(err.stack || err.message);
  } else {
    logger.warn(`${statusCode} - ${message}`);
  }

  // Send error response
  res.status(statusCode).json({
    success: false,
    error: {
      message,
      ...(details ? { details } : {}),
    },
  });
}

module.exports = errorHandler;
