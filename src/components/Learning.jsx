import Section from "./Section.jsx";
import { learning } from "../data/learning.js";

export default function Learning() {
  return (
    <Section id="learning" title="Learning">
      <p className="lead">Learning by building, experimenting, and improving.</p>
      <ul className="learn-list">
        {learning.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </Section>
  );
}
