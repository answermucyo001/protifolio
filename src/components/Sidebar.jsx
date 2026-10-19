import { motion } from "framer-motion";
import { site, sections } from "../data/site.js";
import SocialLinks from "./SocialLinks.jsx";
import { SunIcon, MoonIcon } from "./Icons.jsx";

export default function Sidebar({ active, theme, toggleTheme }) {
  return (
    <motion.header
      className="sidebar"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p className="brand" style={{ margin: 0 }}><a href="#top">{site.name.toUpperCase()}</a></p>
        <button
          className="icon-btn"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          onClick={toggleTheme}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
      <p className="sidebar-title">{site.title}</p>
      <p className="sidebar-sub">{site.secondary}</p>
      <p className="sidebar-school">{site.school} · {site.location}</p>
      <p className="sidebar-desc">{site.sidebarDescription}</p>

      <nav aria-label="Primary" className="side-nav">
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={active === s.id ? "active" : ""} aria-current={active === s.id ? "true" : undefined}>
                <span className="nav-line" aria-hidden="true" />
                <span className="nav-label">{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <SocialLinks />
    </motion.header>
  );
}
