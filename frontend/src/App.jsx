import { useState } from "react";
import AuthPanel from "./components/AuthPanel";
import AiConsole from "./components/AiConsole";

export default function App() {
  const [session, setSession] = useState(null);

  return (
    <div className="shell">
      <header className="topbar">
        <div className="brand">
          <span className="dot" />
          AI MICROSERVICE CONSOLE
        </div>
        <div className="statusline">
          {session ? `session: ${session.user.email}` : "session: none"}
        </div>
      </header>

      <main>
        <AuthPanel onAuth={setSession} />
        <AiConsole />
      </main>

      <footer className="footer">
        <span>rate-limited · schema-validated · server-side AI proxy</span>
        <span>backend: render · frontend: vercel</span>
      </footer>
    </div>
  );
}
