import { useState } from "react";
import { loginUser, registerUser } from "../api";

export default function AuthPanel({ onAuth }) {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [status, setStatus] = useState(null); // { type: 'ok' | 'err', text }
  const [loading, setLoading] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const payload =
        mode === "login"
          ? { email: form.email, password: form.password }
          : form;
      const data = mode === "login" ? await loginUser(payload) : await registerUser(payload);
      setStatus({ type: "ok", text: `Authenticated as ${data.user.email}` });
      onAuth?.(data);
    } catch (err) {
      setStatus({ type: "err", text: err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="panel">
      <h2>{mode === "login" ? "Sign in" : "Create account"}</h2>
      <form onSubmit={handleSubmit}>
        {mode === "register" && (
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" value={form.name} onChange={update("name")} required />
          </div>
        )}
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={form.email} onChange={update("email")} required />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={form.password}
            onChange={update("password")}
            required
          />
        </div>
        <div className="row">
          <button type="submit" disabled={loading}>
            {loading ? "Working…" : mode === "login" ? "Sign in" : "Register"}
          </button>
          <button
            type="button"
            className="ghost"
            onClick={() => setMode(mode === "login" ? "register" : "login")}
          >
            {mode === "login" ? "Need an account?" : "Have an account?"}
          </button>
        </div>
      </form>
      {status && <div className={`msg ${status.type}`}>{status.text}</div>}
    </section>
  );
}
