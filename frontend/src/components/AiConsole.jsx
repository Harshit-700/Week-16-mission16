import { useState } from "react";
import { requestAiSuggestion } from "../api";

export default function AiConsole() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const data = await requestAiSuggestion({ prompt });
      setOutput(data.suggestion);
    } catch (err) {
      setStatus({ type: "err", text: `${err.status || ""} ${err.message}`.trim() });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="panel">
      <h2>AI Suggest — POST /api/ai/suggest</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="prompt">Prompt</label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask the server-side model for a suggestion…"
            required
            minLength={3}
            maxLength={2000}
          />
        </div>
        <button type="submit" disabled={loading || prompt.trim().length < 3}>
          {loading ? "Requesting…" : "Send to server"}
        </button>
      </form>
      {status && <div className={`msg ${status.type}`}>{status.text}</div>}
      <div style={{ marginTop: 16 }}>
        <label style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--muted)" }}>
          Response
        </label>
        <div className="console">
          {output || <span className="cursor" />}
        </div>
      </div>
    </section>
  );
}
