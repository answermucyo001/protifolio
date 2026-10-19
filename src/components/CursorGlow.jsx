import { useEffect, useRef } from "react";

// Soft spotlight that follows the mouse (fine pointers only).
export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return undefined;
    const el = ref.current;
    const move = (e) => {
      el.style.background = `radial-gradient(520px circle at ${e.clientX}px ${e.clientY}px, rgba(100,255,218,0.08), transparent 70%)`;
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
