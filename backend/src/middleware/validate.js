const AppError = require("../utils/AppError");

// Validation middleware that properly integrates with error handler
function validate(schema) {
  return (req, res, next) => {
    try {
      const result = schema.safeParse(req.body);

      if (!result.success) {
        const details = result.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        }));
        // Pass error to error handler via next()
        return next(new AppError("Validation failed", 400, details));
      }

      // Validation passed, attach parsed data to request
      req.body = result.data;
      next();
    } catch (error) {
      // Catch any unexpected errors and pass to error handler
      next(new AppError("Validation error", 500, error.message));
    }
  };
}

module.exports = validate;