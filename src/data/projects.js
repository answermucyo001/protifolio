// Add a new object to this array to add a project.
const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=70`;

// Leave github / demo / image empty ("") to hide them. Images below are online stock photos: replace with real screenshots.
// kind: "Personal Project" | "School Project" | "Learning Project" | "Creative Experiment"
export const projects = [
  {
    title: "Services Booking System",
    kind: "Personal Project",
    description:
      "A web-based platform for managing services, reservations, schedules and appointments.",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "REST API"],
    github: "",
    demo: "",
    image: photo("photo-1517694712202-14dd9538aa97"),
  },
  {
    title: "IoT Fire Safety Monitoring",
    kind: "School Project",
    description:
      "An IoT monitoring system using sensors and an ESP32 to monitor environmental conditions and provide safety alerts.",
    technologies: ["ESP32", "DHT11", "MQ Sensor", "PHP", "MySQL", "JavaScript"],
    github: "",
    demo: "",
    image: photo("photo-1518770660439-4636190af475"),
  },
  {
    title: "Personal Portfolio",
    kind: "Learning Project",
    description:
      "A personal portfolio combining software development, technology, creativity and artwork.",
    technologies: ["React.js", "Vite", "CSS", "Framer Motion"],
    github: "",
    demo: "",
    image: photo("photo-1555066931-4365d14bab8c"),
  },
];
