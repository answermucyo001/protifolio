import { motion } from "framer-motion";

// Subtle fade + slide-up. Reduced motion is handled globally by MotionConfig.
export default function Reveal({ children, delay = 0, as = "div", className }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </Tag>
  );
}
