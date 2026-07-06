

const isProd = process.env.NODE_ENV === "production";

const logger = {
  info: (...args) => {
    if (!isProd) console.log("[INFO]", ...args);
  },
  debug: (...args) => {
    if (!isProd) console.debug("[DEBUG]", ...args);
  },
  warn: (...args) => {
    console.warn("[WARN]", ...args);
  },
  error: (...args) => {
    console.error("[ERROR]", ...args);
  },
};

module.exports = logger;
