const { GoogleGenAI } = require("@google/genai");
const AppError = require("../utils/AppError");
const asyncHandler = require("../utils/asyncHandler");
const logger = require("../utils/logger");

const client = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const SYSTEM_INSTRUCTION =
  "You are a concise assistant embedded in a product. Keep answers short and directly useful.";


const suggest = asyncHandler(async (req, res) => {
  if (!process.env.GEMINI_API_KEY) {
    throw new AppError("AI service is not configured on the server", 500);
  }

  const { prompt, maxTokens, temperature } = req.body;

  let response;
  try {
    response = await client.models.generateContent({
      
      model: process.env.GEMINI_MODEL || "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        maxOutputTokens: maxTokens || 300,
        temperature: temperature ?? 0.7,
      },
    });
  } catch (err) {
    logger.error("Gemini request failed:", err.message);
    throw new AppError("The AI provider failed to respond. Please try again.", 502);
  }

  const rawText = response.text || "";

 
  const sanitized = rawText.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, 4000);

  res.status(200).json({
    success: true,
    data: {
      suggestion: sanitized,
    },
  });
});

module.exports = { suggest };
