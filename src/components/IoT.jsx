import Section from "./Section.jsx";

const flow = [
  { name: "Sensors", note: "Temperature, humidity, gas" },
  { name: "ESP32", note: "Reads and sends data over Wi-Fi" },
  { name: "API", note: "Receives and validates readings" },
  { name: "Database", note: "Stores readings over time" },
  { name: "Web dashboard", note: "Shows live data and alerts" },
];

export default function IoT() {
  return (
    <Section id="iot" title="IoT & Technology">
      <p>
        I enjoy exploring how software can interact with physical devices and real-world environments. Even a
        small sensor project touches hardware, networking, backend code, storage and interface design, which
        makes it a great way to learn how whole systems fit together.
      </p>
      <ol className="flow" aria-label="IoT data flow from sensors to web dashboard">
        {flow.map((f, i) => (
          <li key={f.name} className="flow-step">
            <div className="flow-node">
              <span className="flow-name">{f.name}</span>
              <span className="flow-note">{f.note}</span>
            </div>
            {i < flow.length - 1 && <span className="flow-line" aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </Section>
  );
}
