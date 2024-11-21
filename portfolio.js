import {
  FaCss3,
  FaDev,
  FaDocker,
  FaEnvelope,
  FaGithub,
  FaGitlab,
  FaHtml5,
  FaJs,
  FaLinkedinIn,
  FaMapMarkedAlt,
  FaNodeJs,
  FaPhoneAlt,
  FaReact,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const pageTitle = "Amine.";

export const lastUpdate = "2024-11-21";

export const homeInformation = {
  jobTitle: "Software Developer",
  name: "Amine Slimani",
  description:
    "I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies",
  cvLink: "https://publuu.com/flip-book/724956/1609037",
};

export const socials = [
  { icon: <FaGithub />, path: "https://github.com/slimani-amine" },
  { icon: <FaGitlab />, path: "https://gitlab.com/Amine-Slimani" },
  { icon: <FaXTwitter />, path: "https://x.com/SlimaniA10996" },
  { icon: <FaDev />, path: "https://dev.to/med_amine_slimani" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/med-amine-slimani/",
  },
];

export const stats = [
  { num: 21, text: "Months of experience" },
  { num: 13, text: "Prejects completed" },
  { num: 10, text: "Technologies mastered" },
  { num: 1413, text: "Github Total Contributions" },
];

export const services = [
  {
    num: "01",
    title: "Frontend Developer",
    description: "Passionate about creating impactful frontend solutions.",
    href: "",
  },
  {
    num: "02",
    title: "Backend Developer",
    description: "Skilled in building robust backend systems.",
    href: "",
  },
];

export const about = {
  title: "About Me",
  description:
    "I'm a passionate Full Stack web developer with extensive experience in building scalable applications using TypeScript, JavaScript, React.js, and various cloud technologies. Currently, I work as a Full Stack Developer at SoftylinesDev while pursuing my studies in Software Engineering at Horizon. I have a strong interest in learning new technologies and applying them innovatively to create impactful solutions. Known for my self-motivation, dedication to learning, and collaborative spirit. ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mohamed Amine Slimani",
    },
    {
      fieldName: "Email",
      fieldValue: "mohamed.amine.slimani@horizon-tech.tn",
    },
    {
      fieldName: "Phone",
      fieldValue: "+216 56 251 081",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Tunisia",
    },
    {
      fieldName: "Languages",
      fieldValue: "Arabic, English, French",
    },
    {
      fieldName: "Experience",
      fieldValue: "+1 Years",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};

export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "A skilled software developer with a strong background in creating seamless digital experiences, specializing in both frontend and backend technologies.",
  items: [
    {
      company: "SoftyLines Dev",
      position: "Full Stack Developer",
      duration: "2023 - Present",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "Summer 2023",
    },
    {
      company: "Upwork",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
  ],
};

export const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "A dedicated learner with a solid foundation in computer science and various specialized IT programs, committed to continuous personal and professional development.",
  items: [
    {
      institution: "Horizon",
      degree: "Computer Science",
      duration: "2023 - Present",
    },
    {
      institution: "Efe",
      degree: "Soft Skills IT",
      duration: "2024",
    },
    {
      institution: "Online Courses",
      degree: "Programming and Web Development",
      duration: "2023 - 2024",
    },
    {
      institution: "Rbk",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Tunisian Army",
      degree: "Officer",
      duration: "2022 - 2023",
    },
  ],
};

export const skills = {
  title: "My Skills",
  description:
    "Proficient in a diverse range of technologies, combining technical expertise with creativity to develop innovative solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiNestjs />,
      name: "Nest.js",
    },
    {
      icon: <SiExpress />,
      name: "Express",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
  ],
};

export const projects = [
  {
    num: "01",
    as: "FullStack Developer",
    title: "TakiAcademy recruitment",
    description:
      "TakiAcademy, I developed recruitment features for the e-learning platform, including a user-friendly job application interface and an admin dashboard for managing job offers and applications. This streamlined the recruitment process and improved efficiency for both applicants and administrators.",
    stack: [
      { name: "React.js" },
      { name: "MUI" },
      { name: "NodeJs" },
      { name: "Express" },
    ],
    image: "/assets/work/taki-recruitment.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    as: "Frontend Developer",
    title: "Xora",
    description:
      "Xora is a smart workflow automation platform that boosts productivity with AI-powered video editing, seamless team collaboration, and strong data security. It offers scalable plans, advanced analytics, and 24/7 support, making it ideal for content creators and teams to streamline their work efficiently.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/xora.png",
    live: "https://xora-eight.vercel.app",
    github: "https://github.com/slimani-amine/xora.git",
  },
  {
    num: "03",
    as: "Frontend Developer",
    title: "Boumiza square",
    description:
      "A modern and functional website for Boumiza Square, highlighting its services and vibrant community atmosphere. The site includes sections like Home, About, Services, Gallery, and Contact, providing a user-friendly platform to engage visitors, showcase offerings, and enhance its digital reach.",
    stack: [{ name: "NextJs" }, { name: "Tailwind" }, { name: "Strapi" }],
    image: "/assets/work/boumiza.png",
    live: "https://www.boumizasquare.com",
    github: "",
  },
  {
    num: "04",
    as: "Frontend Developer",
    title: "The 21",
    description:
      "A sleek and engaging website for The21 Coffee, featuring sections like Home, About, Menu, Team, Gallery, and Contact. The site captures the café's unique vibe, enhances its online presence, and serves as a 24/7 tool for connecting with customers and growing its audience.",
    stack: [{ name: "reactJs" }, { name: "Tailwind" }],
    image: "/assets/work/the21.png",
    live: "https://the21.vercel.app/",
    github: "",
  },
  {
    num: "05",
    as: "Backend Developer",
    title: "Kotteb",
    description:
      "I contributed as a backend developer for Kotteb, a Quran app designed for seamless and enriching user experiences. Additionally, I created the app's landing page, highlighting its features and ensuring a visually appealing and informative platform to attract and engage users.",
    stack: [{ name: "NodeJs" }, { name: "Express" }, { name: "MongoDb" }],
    image: "/assets/work/kotteb.jpeg",
    live: "https://kotteb.com/",
    github: "",
  },
  {
    num: "06",
    as: "Frontend Developer",
    title: "Design system",
    description:
      "I developed a comprehensive **Design System** to ensure consistency, scalability, and efficiency across projects. This system includes reusable components, standardized typography, color palettes, and documentation, empowering teams to create cohesive user interfaces while streamlining the design and development process.",
    stack: [{ name: "ReactJs" }, { name: "Scss" }],
    image: "/assets/work/designSystem.png",
    live: "",
    github: "",
  },
  {
    num: "07",
    as: "FullStack Developer",
    title: "SoftyNote",
    description:
      "A Notion clone, focusing on building a responsive front-end with React and a scalable back-end using Node.js and Express. I implemented key features like note-taking, task management, and real-time collaboration, ensuring a seamless user experience and robust performance.",
    stack: [
      { name: "React" },
      { name: "tailwind" },
      { name: "NestJs" },
      { name: "TypeOrm" },
      { name: "PostgreSQL" },
    ],
    image: "/assets/work/softynote.png",
    live: "https://notes.softylines.com",
    github: "",
  },
  {
    num: "08",
    as: "FullStack mobile Developer",
    title: "Crafty",
    description:
      "As a full-stack developer and Scrum Master, I led a team of four in developing Delightful, a vibrant mobile marketplace for handmade treasures, as my graduation project. I worked on both the front-end and back-end, ensuring a seamless user experience with features like product listings, secure payments, and real-time updates. As Scrum Master, I facilitated team collaboration and agile workflows to deliver the project on time.",
    stack: [{ name: "ReactNative" }, { name: "Tailwind" }, { name: "Prisma" }],
    image: "/assets/work/crafty.png",
    live: "https://www.behance.net/gallery/184259695/Crafty",
    github: "",
  },
  {
    num: "09",
    as: "FullStack Developer",
    title: "Ixamee",
    description:
      "E-learning platform, working on both the front-end and back-end. I built a user-friendly interface with NextJs and implemented a scalable backend with Prisma. Key features included course management, user authentication, and real-time progress tracking, ensuring a seamless and engaging learning experience.",
    stack: [{ name: "NextJs" }, { name: "Tailwind" }, { name: "Prisma" }],
    image: "/assets/work/ixamee.png",
    live: "https://ixamee.vercel.app/login",
    github: "",
  },
  {
    num: "10",
    as: "Backend Developer",
    title: "DayTask",
    description:
      "task managment mobile application using NestJS, focusing on building scalable and efficient APIs. I implemented features such as task creation, user authentication, and real-time updates.",
    stack: [{ name: "NestJs" }, { name: "TypeOrm" }, { name: "PostgreSQL" }],
    image: "/assets/work/dayTask.png",
    live: "",
    github: "https://github.com/slimani-amine/DayTask-Backend.git",
  },
  {
    num: "11",
    as: "FullStack Developer",
    title: "Exclusive",
    description:
      "An e-commerce web application, building both the front-end and back-end. I utilized React for a responsive user interface and Node.js with Express for a robust back-end, implementing features like product management, user authentication, and secure payment integration to provide a seamless shopping experience.",
    stack: [{ name: "NextJs" }, { name: "Tailwind" }, { name: "Prisma" }],
    image: "/assets/work/exclusive.png",
    live: "",
    github: "https://github.com/slimani-amine/E-commerce.git",
  },
  {
    num: "12",
    as: "Frontend Developer",
    title: "The Wild Oasis",
    description:
      "Hotel managment web application, handling both front-end and back-end development. Using React for a user-friendly interface and Node.js with Express for the back-end, I implemented features like booking management, room availability tracking, and payment integration, ensuring an efficient and smooth experience for both hotel staff and guests.",
    stack: [{ name: "ReactJs" }, { name: "Tailwind" }, { name: "Supabase" }],
    image: "/assets/work/the-wild-oasis.png",
    live: "",
    github: "https://github.com/slimani-amine/the-wild-oasis.git",
  },
  {
    num: "13",
    as: "Backend Developer",
    title: "Bazaar",
    description:
      "E-commrece web application, building both the front-end and back-end. I utilized React for a responsive user interface and Node.js with Express for a robust back-end, implementing features like product management, user authentication, and secure payment integration to provide a seamless shopping experience.",
    stack: [
      { name: "NodeJs" },
      { name: "Express" },
      { name: "TypeOrm" },
      { name: "MySQL" },
    ],

    image: "/assets/work/bazaar.png",
    live: "",
    github: "",
  },
];

export const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+216) 56 251 081" },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mohamed.amine.slimani@horizon-tech.tn",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Adress",
    description: "Sahloul 4, Sousse, Tunisia",
  },
];

export const position = { lng: 10.6079261, lat: 35.8345406 };
