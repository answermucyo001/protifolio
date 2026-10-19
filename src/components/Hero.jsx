import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "../data/site.js";

const roles = ["web apps", "IoT systems", "clean interfaces", "drawings and art"];

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero({ profile }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const avatarImage = profile?.image || "/mucyo.JPG";

  useEffect(() => {
    if (reduce) return undefined;
    const t = setInterval(() => setI((x) => (x + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <motion.section
      id="top"
      className="hero"
      aria-label="Introduction"
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
    >
      <div className="hero-top-row">
        <motion.div variants={item} className="hero-avatar-wrapper">
          <img src={avatarImage} alt={profile?.name || "Mucyo Answer"} className="hero-avatar" />
        </motion.div>
        <div className="hero-text-content">
          <motion.p variants={item} className="hero-hi">Hi, I&apos;m {profile?.name || "Mucyo Answer"}.</motion.p>
          <motion.h1 variants={item}>Software Development  &amp; Creative Artist.</motion.h1>
        </div>
      </div>

      <motion.p variants={item} className="hero-role">
        <span className="sr-only">I make web apps, IoT systems, clean interfaces, and drawings and art.</span>
        <span aria-hidden="true">
          I make{" "}
          <span className="role-slot">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[i]}
                className="role"
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -14, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {roles[i]}
              </motion.span>
            </AnimatePresence>
          </span>
        </span>
      </motion.p>
      <motion.p variants={item} className="hero-text">
        I&apos;m interested in building useful software, experimenting with technology, and turning creative ideas into digital experiences.
      </motion.p>
      <motion.p variants={item} className="hero-tagline">{site.tagline}</motion.p>
    </motion.section>
  );
}
