import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section.jsx";
import ArtworkItem from "./ArtworkItem.jsx";
import RemoteImage from "./RemoteImage.jsx";
import { CloseIcon } from "./Icons.jsx";
import { artwork } from "../data/artwork.js";

export default function Artwork() {
  const [selected, setSelected] = useState(null);
  const lastFocus = useRef(null);
  const closeRef = useRef(null);

  const open = (art) => {
    lastFocus.current = document.activeElement;
    setSelected(art);
  };
  const close = () => {
    setSelected(null);
    lastFocus.current?.focus();
  };

  useEffect(() => {
    if (!selected) return undefined;
    const onKey = (e) => e.key === "Escape" && close();
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <Section id="artwork" title="Artwork">
      <p>Drawing, sketching and making things by hand keeps my eye trained for design, and it shapes how I think about interfaces.</p>
      <ul className="art-grid">
        {artwork.map((a) => <ArtworkItem key={a.title} art={a} onOpen={open} />)}
      </ul>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            <motion.figure
              initial={{ scale: 0.96, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button ref={closeRef} className="icon-btn lightbox-close" aria-label="Close artwork" onClick={close}>
                <CloseIcon />
              </button>
              <RemoteImage src={selected.image} fallback={selected.fallback} alt={selected.alt || selected.title} />
              <figcaption>
                <span className="art-cat">{selected.category}</span>
                <strong>{selected.title}</strong>
                <span className="muted">{selected.description}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
