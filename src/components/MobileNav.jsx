import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site, sections } from "../data/site.js";
import { MenuIcon, CloseIcon, SunIcon, MoonIcon } from "./Icons.jsx";
import SocialLinks from "./SocialLinks.jsx";

export default function MobileNav({ active, theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="mobile-nav">
      <div className="mobile-bar">
        <a href="#top" className="brand-mobile">{site.name.toUpperCase()}</a>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <button
            className="icon-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button ref={toggleRef} className="icon-btn" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}>
            <MenuIcon />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button ref={closeRef} className="icon-btn overlay-close" aria-label="Close menu" onClick={() => setOpen(false)}>
              <CloseIcon />
            </button>
            <nav aria-label="Mobile">
              <ul>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className={active === s.id ? "active" : ""} onClick={() => setOpen(false)}>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <SocialLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
