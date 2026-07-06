const express = require("express");
const { suggest } = require("../controllers/ai.controller");
const validate = require("../middleware/validate");
const { aiSuggestSchema } = require("../validators/schemas");
const { aiLimiter } = require("../middleware/rateLimiter");

const router = express.Router();

router.post("/suggest", aiLimiter, validate(aiSuggestSchema), suggest);

module.exports = router;
