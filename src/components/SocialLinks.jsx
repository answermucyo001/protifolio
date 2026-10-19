import { site } from "../data/site.js";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons.jsx";

const items = [
  { key: "github", label: "GitHub", Icon: GitHubIcon, href: (v) => v },
  { key: "linkedin", label: "LinkedIn", Icon: LinkedInIcon, href: (v) => v },
  { key: "email", label: "Email", Icon: MailIcon, href: (v) => `mailto:${v}` },
];

export default function SocialLinks() {
  return (
    <ul className="social" aria-label="Social links">
      {items.map(({ key, label, Icon, href }) => {
        const value = site.contact[key];
        return (
          <li key={key}>
            {value ? (
              <a href={href(value)} aria-label={label} target={key === "email" ? undefined : "_blank"} rel="noreferrer noopener">
                <Icon />
              </a>
            ) : (
              <span className="is-off" aria-label={`${label} (not added yet)`} title={`${label} link not added yet`}>
                <Icon />
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
