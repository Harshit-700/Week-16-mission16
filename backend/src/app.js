const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRoutes = require("./routes/auth.routes");
const aiRoutes = require("./routes/ai.routes");
const { globalLimiter } = require("./middleware/rateLimiter");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();


app.set("trust proxy", 1); 
app.use(helmet());

const allowedOrigins = (process.env.CLIENT_ORIGIN || "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins.length ? allowedOrigins : true,
    credentials: true,
  })
);

app.use(express.json({ limit: "10kb" }));
app.use(globalLimiter);


app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true, data: { status: "ok" } });
});


app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);


app.use(notFound);
app.use(errorHandler);

module.exports = app;
