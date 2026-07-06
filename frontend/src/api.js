const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

async function request(path, options = {}) {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });

    const body = await res.json().catch(() => ({}));

    if (!res.ok) {
      const message = body?.error?.message || `Request failed (${res.status})`;
      const error = new Error(message);
      error.status = res.status;
      error.details = body?.error?.details;
      throw error;
    }

    return body.data;
  } catch (error) {
    // Re-throw with additional context
    error.status = error.status || 0;
    throw error;
  }
}

export const registerUser = (payload) =>
  request("/api/auth/register", { method: "POST", body: JSON.stringify(payload) });

export const loginUser = (payload) =>
  request("/api/auth/login", { method: "POST", body: JSON.stringify(payload) });

export const requestAiSuggestion = (payload) =>
  request("/api/ai/suggest", { method: "POST", body: JSON.stringify(payload) });