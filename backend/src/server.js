require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");
const logger = require("./utils/logger");

const PORT = process.env.PORT || 5000;

async function start() {
  // Verify critical environment variables
  if (!process.env.MONGODB_URI) {
    logger.error("MONGODB_URI is not set in environment variables");
    process.exit(1);
  }

  if (!process.env.JWT_SECRET) {
    logger.error("JWT_SECRET is not set in environment variables");
    process.exit(1);
  }

  // Connect to MongoDB
  await connectDB();

  // Start server
  const server = app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT} [${process.env.NODE_ENV || "development"}]`);
  });

  // Handle unhandled rejections
  process.on("unhandledRejection", (reason) => {
    logger.error("Unhandled Rejection:", reason);
    server.close(() => process.exit(1));
  });

  // Handle uncaught exceptions
  process.on("uncaughtException", (err) => {
    logger.error("Uncaught Exception:", err);
    server.close(() => process.exit(1));
  });
}

start();