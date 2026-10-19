import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills.js";

const SIZE = 900;
const C = SIZE / 2;
const R1 = 190; // centre -> group ring
const R2 = 118; // group -> skill stars
const COLORS = ["#64ffda", "#7fdbff", "#c792ea", "#f7c948", "#ff8fa3", "#a3e635"];

const rad = (d) => (d * Math.PI) / 180;
const polar = (cx, cy, r, deg) => ({ x: cx + r * Math.cos(rad(deg)), y: cy + r * Math.sin(rad(deg)) });

// Deterministic background stars (same on every render).
let seed = 7;
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const bgStars = Array.from({ length: 70 }, () => ({
  x: rnd() * SIZE, y: rnd() * SIZE, r: 0.6 + rnd() * 1.4, d: rnd() * 4,
}));

// Positions are computed from skills.js, so new skills appear automatically.
const groups = skills.map((g, gi) => {
  const base = -90 + gi * (360 / skills.length);
  const node = polar(C, C, R1, base);
  const k = g.items.length;
  const span = Math.min(140, (k - 1) * 34);
  const stars = g.items.map((label, si) => {
    const a = k === 1 ? base : base - span / 2 + (span * si) / (k - 1);
    const p = polar(node.x, node.y, R2, a);
    const cos = Math.cos(rad(a));
    const side = Math.abs(cos) > 0.35;
    return {
      label, ...p,
      anchor: side ? (cos > 0 ? "start" : "end") : "middle",
      dx: side ? (cos > 0 ? 12 : -12) : 0,
      dy: side ? 5 : Math.sin(rad(a)) > 0 ? 24 : -14,
      delay: gi * 0.15 + si * 0.08,
    };
  });
  return { name: g.group, color: COLORS[gi % COLORS.length], node, stars };
});

const draw = { initial: { pathLength: 0, opacity: 0 }, whileInView: { pathLength: 1, opacity: 1 }, viewport: { once: true } };

export default function SkillConstellation() {
  const [active, setActive] = useState(null);

  return (
    <div className="constellation">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} role="img" aria-label={`Skill constellation with ${groups.length} groups: ${groups.map((g) => g.name).join(", ")}. A full list follows below.`}>
        <defs>
          <radialGradient id="core-glow">
            <stop offset="0%" stopColor="#64ffda" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#64ffda" stopOpacity="0" />
          </radialGradient>
        </defs>

        {bgStars.map((s, i) => (
          <circle key={i} className="bg-star" cx={s.x} cy={s.y} r={s.r} style={{ animationDelay: `${s.d}s` }} />
        ))}
        <circle className="orbit" cx={C} cy={C} r={R1} />
        <circle cx={C} cy={C} r={120} fill="url(#core-glow)" />

        {groups.map((g) => {
          const dim = active && active !== g.name;
          return (
            <g
              key={g.name}
              className={`cg ${dim ? "dim" : ""} ${active === g.name ? "lit" : ""}`}
              onMouseEnter={() => setActive(g.name)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive((a) => (a === g.name ? null : g.name))}
            >
              <motion.line {...draw} transition={{ duration: 0.8 }} x1={C} y1={C} x2={g.node.x} y2={g.node.y} stroke={g.color} strokeOpacity="0.5" strokeWidth="1.5" />
              <motion.polyline
                {...draw}
                transition={{ duration: 1.2, delay: 0.4 }}
                points={[g.node, ...g.stars].map((p) => `${p.x},${p.y}`).join(" ")}
                fill="none" stroke={g.color} strokeOpacity="0.45" strokeWidth="1" strokeDasharray="3 5"
              />
              {g.stars.map((s) => (
                <g key={s.label} className="star" style={{ animationDelay: `${s.delay * 3}s` }}>
                  <circle cx={s.x} cy={s.y} r="11" fill={g.color} opacity="0.12" />
                  <motion.circle
                    cx={s.x} cy={s.y} r="5" fill={g.color}
                    style={{ transformBox: "fill-box", transformOrigin: "center" }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + s.delay }}
                  />
                  <text x={s.x + s.dx} y={s.y + s.dy} textAnchor={s.anchor} className="star-label">{s.label}</text>
                </g>
              ))}
              <circle className="halo" cx={g.node.x} cy={g.node.y} r="36" fill="none" stroke={g.color} style={{ transformBox: "fill-box", transformOrigin: "center" }} />
              <circle cx={g.node.x} cy={g.node.y} r="36" fill="#0a192f" stroke={g.color} strokeWidth="2" />
              <text x={g.node.x} y={g.node.y + 5} textAnchor="middle" className="group-label" fill={g.color}>{g.name}</text>
            </g>
          );
        })}

        <circle className="core-ring" cx={C} cy={C} r="54" fill="none" stroke="#64ffda" style={{ transformBox: "fill-box", transformOrigin: "center" }} />
        <circle cx={C} cy={C} r="54" fill="#112240" stroke="#64ffda" strokeWidth="2" />
        <text x={C} y={C + 6} textAnchor="middle" className="core-label">MUCYO</text>
      </svg>
      <p className="muted small constellation-hint">Hover or tap a group to light up its stars.</p>
    </div>
  );
}
