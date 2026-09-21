interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Bopomofo quiz app",
    description: "Quiz app to test your knowledge of Bopomofo symbols",
    url: "https://github.com/jeanne-v/bopomofo-quiz-app",
    tags: ["Typescript", "React", "TailwindCSS"],
  },
  {
    title: "HRnet project",
    description: "Conversion of a legacy JQuery app with outdated plugins to React",
    url: "https://github.com/jeanne-v/hrnet",
    tags: ["Javascript", "React", "Redux"],
  },
  {
    title: "Kasa project",
    description: "Multi-page responsive site based on provided Figma mockups",
    url: "https://github.com/jeanne-v/Kasa",
    tags: ["Javascript", "React", "Sass"],
  },
  {
    title: "Menu Select component",
    description: "Custom React dropdown component created for the HRnet project",
    url: "https://github.com/jeanne-v/menu-select",
    tags: ["Javascript", "React", "Redux"],
  },
  {
    title: "Argentbank project",
    description: "Front-end part of an authentification flow with API integration",
    url: "https://github.com/jeanne-v/argentbank",
    tags: ["Javascript", "React", "Redux"],
  },
];

export default projects;
