import { site } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed and built by {site.name}. Layout inspired by classic single-page developer portfolios.
        Built with React, Vite and Framer Motion.
      </p>
    </footer>
  );
}
