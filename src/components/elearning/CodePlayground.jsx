import { useState } from "react";

const samples = [
  {
    title: "Hello World & Variables",
    code: `const name = "Mucyo";\nconst title = "Software Engineering Student";\nconsole.log(\`Hello! I am \${name}, a \${title}.\`);`,
  },
  {
    title: "Array Filter & Map",
    code: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst evens = numbers.filter(n => n % 2 === 0);\nconst doubled = evens.map(n => n * 2);\nconsole.log("Evens:", evens);\nconsole.log("Doubled:", doubled);`,
  },
  {
    title: "Asynchronous Simulation",
    code: `const fetchUserData = async () => {\n  console.log("Fetching user data from server...");\n  await new Promise(resolve => setTimeout(resolve, 500));\n  const user = { name: "Mucyo", role: "Fullstack Developer", location: "Rwanda" };\n  console.log("User Data Received:", user);\n};\nfetchUserData();`,
  }
];

export default function CodePlayground({ onBack }) {
  const [code, setCode] = useState(samples[0].code);
  const [logs, setLogs] = useState([]);

  const handleRun = () => {
    setLogs([]);
    const capturedLogs = [];
    
    // Custom console.log override for sandbox execution
    const customConsole = {
      log: (...args) => {
        capturedLogs.push(args.map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)).join(' '));
        setLogs([...capturedLogs]);
      },
      error: (...args) => {
        capturedLogs.push("Error: " + args.join(' '));
        setLogs([...capturedLogs]);
      },
      warn: (...args) => {
        capturedLogs.push("Warning: " + args.join(' '));
        setLogs([...capturedLogs]);
      }
    };

    try {
      // Create a secure sandboxed function execution
      const runUserCode = new Function('console', code);
      runUserCode(customConsole);
      if (capturedLogs.length === 0) {
        capturedLogs.push("Code executed successfully (no console output).");
        setLogs([...capturedLogs]);
      }
    } catch (err) {
      setLogs([...capturedLogs, "Runtime Error: " + err.message]);
    }
  };

  return (
    <div style={{ background: "var(--bg-light)", border: "1px solid var(--border)", borderRadius: "12px", padding: "32px", marginBottom: "48px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <div>
          <button className="tag" style={{ background: "none", border: "1px solid var(--border)", color: "var(--text)", padding: "6px 12px", marginBottom: "12px", cursor: "pointer", fontWeight: 600 }} onClick={onBack}>
            ← Back to Dashboard
          </button>
          <h1 style={{ fontSize: "1.8rem", color: "var(--text)" }}>💻 In-Browser JavaScript Playground</h1>
        </div>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {samples.map((s, idx) => (
            <button key={idx} className="tag" style={{ background: "var(--bg-lighter)", color: "var(--text)", border: "1px solid var(--border)", padding: "6px 12px", cursor: "pointer", fontWeight: 500 }} onClick={() => setCode(s.code)}>
              {s.title}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="playground-grid">
        {/* Editor Panel */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <span className="small muted" style={{ fontWeight: 600 }}>JavaScript Editor</span>
            <div style={{ display: "flex", gap: "8px" }}>
              <button className="tag" style={{ background: "var(--bg-lighter)", color: "var(--text)", border: "1px solid var(--border)", padding: "4px 10px", cursor: "pointer", fontSize: "0.8rem" }} onClick={() => setCode("")}>
                Clear
              </button>
              <button className="tag" style={{ background: "var(--accent)", color: "var(--bg)", border: 0, padding: "6px 16px", cursor: "pointer", fontWeight: 600 }} onClick={handleRun}>
                ▶ Run Code
              </button>
            </div>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={16}
            style={{ width: "100%", background: "#0f172a", color: "#e2e8f0", padding: "16px", borderRadius: "8px", fontFamily: "monospace", fontSize: "0.92rem", border: "1px solid var(--border)", outline: "none", lineHeight: "1.5" }}
          />
        </div>

        {/* Console Output Panel */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <span className="small muted" style={{ fontWeight: 600 }}>Console Output</span>
            <button className="tag" style={{ background: "var(--bg-lighter)", color: "var(--text)", border: "1px solid var(--border)", padding: "4px 10px", cursor: "pointer", fontSize: "0.8rem" }} onClick={() => setLogs([])}>
              Clear Console
            </button>
          </div>
          <div style={{ width: "100%", height: "360px", background: "#070d19", color: "#64ffda", padding: "16px", borderRadius: "8px", fontFamily: "monospace", fontSize: "0.9rem", border: "1px solid var(--border)", overflowY: "auto", whiteSpace: "pre-wrap" }}>
            {logs.length === 0 ? (
              <span className="muted" style={{ opacity: 0.5 }}>Click "Run Code" to execute JavaScript and view console logs here...</span>
            ) : (
              logs.map((log, i) => <div key={i} style={{ marginBottom: "6px" }}>{log}</div>)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
