import Section from "./Section.jsx";
import ProjectItem from "./ProjectItem.jsx";
import { projects as fallbackProjects } from "../data/projects.js";

export default function Projects({ data }) {
  const projectsList = data && data.length > 0 ? data : fallbackProjects;
  return (
    <Section id="projects" title="Projects">
      <ul className="project-list">
        {projectsList.map((p) => <ProjectItem key={p.id || p.title} project={p} />)}
      </ul>
    </Section>
  );
}
