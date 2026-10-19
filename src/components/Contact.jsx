import { useState } from "react";
import Section from "./Section.jsx";
import { site } from "../data/site.js";

const links = [
  { key: "email", label: "Email", href: (v) => `mailto:${v}` },
  { key: "github", label: "GitHub", href: (v) => v },
  { key: "linkedin", label: "LinkedIn", href: (v) => v },
];

export default function Contact() {
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);
  const { email, formEndpoint } = site.contact;

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (formEndpoint) {
      setSending(true);
      try {
        const res = await fetch(formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Request failed");
        form.reset();
        setStatus({ type: "ok", text: "Message sent. Thank you!" });
      } catch {
        setStatus({ type: "error", text: "The message could not be sent. Please try again later." });
      } finally {
        setSending(false);
      }
      return;
    }

    if (email) {
      const subject = encodeURIComponent(`Portfolio message from ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\nFrom: ${data.name} (${data.email})`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setStatus({ type: "ok", text: "Opening your email app to send the message." });
      return;
    }

    setStatus({ type: "error", text: "The contact form isn't connected yet. Add an email or form endpoint in src/data/site.js." });
  };

  return (
    <Section id="contact" title="Contact">
      <h3 className="contact-heading">Let&apos;s build something meaningful.</h3>
      <p>I&apos;m always interested in learning, experimenting, creating, and turning ideas into useful software.</p>

      <ul className="contact-links">
        {links.map(({ key, label, href }) => {
          const v = site.contact[key];
          return (
            <li key={key}>
              <span className="muted">{label}</span>
              {v ? (
                <a className="link" href={href(v)} target={key === "email" ? undefined : "_blank"} rel="noreferrer noopener">
                  {key === "email" ? v : v.replace(/^https?:\/\/(www\.)?/, "")}
                </a>
              ) : (
                <span className="muted">Coming soon</span>
              )}
            </li>
          );
        })}
      </ul>

      <form className="form" onSubmit={onSubmit} noValidate={false}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required />
        <button type="submit" className="btn" disabled={sending}>{sending ? "Sending…" : "Send Message"}</button>
        <p role="status" aria-live="polite" className={`form-status ${status.type}`}>{status.text}</p>
      </form>
    </Section>
  );
}
