import {
  buymed,
  lengkeng,
  tma,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "src/assets";
import { todoAppReactVite, trelloTutorial } from "src/assets/projects";

const experience = [
  {
    title: "Software Engineer",
    companyName: "Buymed",
    icon: buymed,
    iconBg: "#383E56",
    date: "03/2023 - 05/2024",
    points: [
      "Analyze and handle requirements on logistic and warehouse stock",
      "Strong focus on optimizing page load performance for large data sets.",
      "Restructure and refactor project codebase, and introduce better coding standards for the team",
      "Experience in managing task planning, conducting thorough code reviews, and fostering a positive, open-minded, and honest team environment.",
    ],
  },
  {
    title: "Frontend Engineer",
    companyName: "Leng Keng",
    icon: lengkeng,
    iconBg: "#E6DEDD",
    date: "09/2020 - 02/2023",
    points: [
      "I played a pivotal role in developing a web application for OOH advertising, focusing on UI design and logic for critical modules like authentication, inventory management, search, filtering, and report generation. My contributions streamlined a complex B2B website's ordering process, enhancing user experience and SEO while optimizing performance for independent customer ordering.",
      "Additionally, I oversaw project management, including task delegation and project processes. I also actively participated in the hiring process, onboarding, and mentoring of new team members, showcasing my strong leadership and software engineering skills.",
    ],
  },
  {
    title: "Frontend Engineer",
    companyName: "TMA Solutions",
    icon: tma,
    iconBg: "#E6DEDD",
    date: "01/2018 - 06/2020",
    points: [
      "Collaborated with back-end developers and designers to design & build website interface.",
      "Built website interface, wrote unit tests & fixed bugs.",
      "Implemented features such as project management & class registration.",
      "Researched related technology and ideas to improve the product.",
    ],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "To do App",
    description:
      "A simple to-do application built with React and TypeScript, featuring a mock API using Mock Server Worker. This application allows users to add, toggle, and delete tasks, with form validation and unit tests.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "Mock API",
        color: "pink-text-gradient",
      },
    ],
    image: todoAppReactVite,
    source_code_link: "https://github.com/HangNhung/todo-app",
  },
  {
    name: "Trello Tutorial",
    description:
      "This Trello clone project is a task management app built with React, showcasing essential features like board and list creation, card management, and drag-and-drop functionality",
    tags: [
      {
        name: "next",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "yellow-text-gradient",
      },
      {
        name: "Clerk",
        color: "pink-text-gradient",
      },
    ],
    image: trelloTutorial,
    source_code_link: "https://github.com/HangNhung/trello-tutorial",
  },
];

export { experience, technologies, projects };
