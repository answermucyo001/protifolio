import Section from "./Section.jsx";
import TechTag from "./TechTag.jsx";
import SkillConstellation from "./SkillConstellation.jsx";
import { skills as fallbackSkills } from "../data/skills.js";

export default function Skills({ data }) {
  const groupedSkills = {};
  const source = data && data.length > 0 ? data : null;

  if (source) {
    source.forEach((s) => {
      const g = s.group_name;
      const item = s.item_name;
      if (!groupedSkills[g]) groupedSkills[g] = [];
      groupedSkills[g].push(item);
    });
  }

  const skillsToDisplay = source
    ? Object.keys(groupedSkills).map((g) => ({ group: g, items: groupedSkills[g] }))
    : fallbackSkills;

  return (
    <Section id="skills" title="Skills">
      <p>My skills as a constellation: each group is a cluster of things I build with and keep learning.</p>
      <SkillConstellation />
      <dl className="skill-groups">
        {skillsToDisplay.map((g) => (
          <div key={g.group} className="skill-group">
            <dt>{g.group}</dt>
            <dd>
              <ul className="tags">{g.items.map((i) => <TechTag key={i}>{i}</TechTag>)}</ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
