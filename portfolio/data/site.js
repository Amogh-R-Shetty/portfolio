// Edit this file to personalise the whole site.
export const site = {
  name: "Amogh",
  role: "Full-stack web developer",
  tagline:
    "I build fast, clean websites and web apps that help businesses get customers.",
  available: "Available for internships and freelance work",
  email: "you@example.com", // <- change this
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  resume: "/resume.pdf", // put your resume PDF in the /public folder
  location: "India",
  highlights: [
    { value: "10+", label: "projects built" },
    { value: "6", label: "core technologies" },
    { value: "24h", label: "typical reply time" },
  ],
  services: [
    {
      title: "Websites that load fast",
      text: "Responsive, accessible sites built with Next.js and tuned for speed and search.",
    },
    {
      title: "Web apps that work",
      text: "Dashboards, tools and APIs with React and Node.js, from first sketch to deployment.",
    },
    {
      title: "Clear communication",
      text: "Short updates, honest timelines and code that your team can read and maintain.",
    },
  ],
  skills: [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "CSS",
    "Git",
    "REST APIs",
    "Responsive design",
  ],
  about: [
    "I'm Amogh, a developer who likes turning rough ideas into products people actually use. I care about clean code, clear interfaces and pages that load quickly.",
    "I work mostly in the React and Next.js ecosystem, and I enjoy owning a feature end to end: design, code, testing and launch.",
    "Replace this with your own story: where you study or work, what you've built, and what kind of role you want next.",
  ],
};

export const projects = [
  {
    title: "Task Tracker",
    summary: "A to-do app with filters, due dates and saved lists.",
    result: "Used daily by 20+ classmates.",
    tags: ["React", "CSS", "localStorage"],
    live: "#",
    repo: "#",
  },
  {
    title: "Weather Now",
    summary: "Current weather and a 5-day forecast for any city.",
    result: "Loads in under a second.",
    tags: ["Next.js", "REST API"],
    live: "#",
    repo: "#",
  },
  {
    title: "Notes API",
    summary: "A REST API to create, search and tag notes.",
    result: "Fully documented endpoints.",
    tags: ["Node.js", "Express", "MongoDB"],
    live: "",
    repo: "#",
  },
];
