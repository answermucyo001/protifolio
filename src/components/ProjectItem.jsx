import TechTag from "./TechTag.jsx";
import RemoteImage from "./RemoteImage.jsx";
import { ArrowIcon, GitHubIcon, ExternalIcon } from "./Icons.jsx";

export default function ProjectItem({ project }) {
  const { title, kind, description, technologies, github, demo, image } = project;
  const primary = demo || github;

  return (
    <li className="project">
      <div className="project-media">
        {image && <RemoteImage src={image} alt={`Illustration for ${title}`} width="200" height="120" />}
      </div>
      <div className="project-body">
        {kind && <p className="period">{kind}</p>}
        <h3>
          {primary ? (
            <a href={primary} target="_blank" rel="noreferrer noopener" className="project-link">
              {title}
              <span className="arrow"><ArrowIcon /></span>
            </a>
          ) : (
            <span className="project-link">{title}</span>
          )}
        </h3>
        <p>{description}</p>
        <div className="project-actions">
          {github && (
            <a href={github} target="_blank" rel="noreferrer noopener" className="mini-link">
              <GitHubIcon /> <span>Code</span>
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer noopener" className="mini-link">
              <ExternalIcon /> <span>Live demo</span>
            </a>
          )}
        </div>
        <ul className="tags" aria-label={`Technologies used in ${title}`}>
          {technologies.map((t) => <TechTag key={t}>{t}</TechTag>)}
        </ul>
      </div>
    </li>
  );
}
