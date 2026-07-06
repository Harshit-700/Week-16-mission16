const logger = require("../utils/logger");


function errorHandler(err, req, res, next) {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";
  let details = err.details || null;

 
  if (err.name === "CastError") {
    statusCode = 400;
    message = "Invalid identifier format";
  }

 
  if (err.code === 11000) {
    statusCode = 400;
    message = "Duplicate field value";
    details = err.keyValue;
  }

 
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = "Database validation failed";
    details = Object.values(err.errors).map((e) => e.message);
  }

  if (statusCode >= 500) {
    logger.error(err.stack || err.message);
  } else {
    logger.warn(`${statusCode} - ${message}`);
  }

  res.status(statusCode).json({
    success: false,
    error: {
      message,
      ...(details ? { details } : {}),
    },
  });
}

module.exports = errorHandler;
