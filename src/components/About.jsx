import Section from "./Section.jsx";
import RemoteImage from "./RemoteImage.jsx";

const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=70`;

const L = ({ href, children }) => (
  <a className="link" href={href} target="_blank" rel="noreferrer noopener">{children}</a>
);

export default function About({ profile }) {
  const avatarImage = profile?.image || "/mucyo.JPG";
  const profileName = profile?.name || "Mucyo Answer";

  return (
    <Section id="about" title="About">
      <p>
        I&apos;m a software development student at <strong>Lycée de Muhura</strong> in Rwanda. I enjoy
        building things for the web with <L href="https://developer.mozilla.org/docs/Web/JavaScript">JavaScript</L> and{" "}
        <L href="https://react.dev">React.js</L>, and I&apos;m learning how the other half works too: backend
        development with <L href="https://nodejs.org">Node.js</L>, databases like{" "}
        <L href="https://www.mysql.com">MySQL</L>, and the APIs that connect them.
      </p>
      <p>
        I&apos;m also fascinated by software that touches the physical world. Working with the{" "}
        <L href="https://www.espressif.com/en/products/socs/esp32">ESP32</L>, sensors and embedded systems has
        shown me how code can react to real environments. I care about UI/UX as well, because useful software
        should also feel clear and pleasant to use.
      </p>
      <p>
        Away from the keyboard, I draw and make artwork. Creativity and programming feed each other for me:
        both are about turning an idea into something people can see and use.
      </p>
      <div className="about-photos">
        <figure className="profile-figure">
          <img src={avatarImage} alt={profileName} width="350" height="230" style={{ width: "100%", aspectRatio: "3 / 2", objectFit: "cover" }} />
          <figcaption>{profileName}</figcaption>
        </figure>
        <figure>
          <RemoteImage src={photo("photo-1517694712202-14dd9538aa97")} alt="Laptop with code on screen" width="350" height="230" />
          <figcaption>Code</figcaption>
        </figure>
        <figure>
          <RemoteImage src={photo("photo-1518770660439-4636190af475")} alt="Close-up of a circuit board" width="350" height="230" />
          <figcaption>Hardware</figcaption>
        </figure>
      </div>
    </Section>
  );
}
