const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRoutes = require("./routes/auth.routes");
const aiRoutes = require("./routes/ai.routes");
const { globalLimiter } = require("./middleware/rateLimiter");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Security & Trust
app.set("trust proxy", 1);
app.use(helmet());

// CORS Configuration - Fixed to handle all origins properly
const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 86400,
  })
);

// Body Parser with size limit
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ limit: "10kb", extended: true }));

// Rate Limiting
app.use(globalLimiter);

// Health Check Endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true, data: { status: "ok" } });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

// 404 Handler
app.use(notFound);

// Global Error Handler (must be last)
app.use(errorHandler);

module.exports = app;