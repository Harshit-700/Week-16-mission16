const { z } = require("zod");

// --- Auth ---
const registerSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().trim().toLowerCase().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password is too long"),
});

const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

// --- AI microservice ---
const aiSuggestSchema = z.object({
  prompt: z
    .string()
    .trim()
    .min(3, "Prompt must be at least 3 characters")
    .max(2000, "Prompt must be under 2000 characters"),
  // Optional knobs, tightly bounded so a client can't request runaway generations
  maxTokens: z.number().int().positive().max(1000).optional(),
  temperature: z.number().min(0).max(1).optional(),
});

module.exports = {
  registerSchema,
  loginSchema,
  aiSuggestSchema,
};
