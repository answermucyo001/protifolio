import Section from "./Section.jsx";
import TechTag from "./TechTag.jsx";
import { education as fallbackEducation } from "../data/education.js";

export default function Education({ data }) {
  const educationList = data && data.length > 0 ? data : fallbackEducation;
  return (
    <Section id="education" title="Education">
      <ol className="timeline">
        {educationList.map((e) => (
          <li key={`${e.institution}-${e.title}-${e.id || 0}`} className="timeline-item">
            <p className="period">{e.period}</p>
            <div>
              <h3>{e.title} · {e.institution}</h3>
              <p className="muted small">{e.location}</p>
              <p>{e.description}</p>
              <ul className="tags" aria-label="Topics">
                {e.topics.map((t) => <TechTag key={t}>{t}</TechTag>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
