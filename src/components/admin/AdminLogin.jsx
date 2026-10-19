import { useState } from "react";
import { motion } from "framer-motion";
import { loginAdmin } from "../../utils/portfolioStorage.js";

export default function AdminLogin({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = loginAdmin(username, password);
      if (!result.success) {
        throw new Error(result.error);
      }
      onLoginSuccess();
    } catch (err) {
      setError(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-auth-container">
      <motion.div
        className="admin-auth-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Admin Login</h2>
        <p className="muted">Sign in to manage your portfolio content (Username: <code>mucyo answer</code>, Password: <code>Mucyo123@</code>).</p>

        {error && <div className="form-status error" role="alert">{error}</div>}

        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="mucyo answer"
            required
            autoComplete="username"
          />

          <label htmlFor="password">Password</label>
          <div className="password-wrapper" style={{ position: "relative" }}>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
              autoComplete="current-password"
              style={{ width: "100%", paddingRight: "50px" }}
            />
            <button
              type="button"
              className="icon-btn"
              onClick={() => setShowPassword(!showPassword)}
              style={{ position: "absolute", right: "6px", top: "6px", width: "36px", height: "36px", border: "none" }}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button type="submit" className="btn" disabled={loading} style={{ width: "100%", justifyContent: "center" }}>
            {loading ? "Signing in..." : "Login to Dashboard"}
          </button>
        </form>

        <div style={{ marginTop: "24px", textAlign: "center" }}>
          <a href="#top" className="link" onClick={(e) => { e.preventDefault(); window.location.href = "/"; }}>
            ← Back to Public Portfolio
          </a>
        </div>
      </motion.div>
    </div>
  );
}
