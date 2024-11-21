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
  FaTwitter,
} from "react-icons/fa";
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
  { icon: <FaTwitter />, path: "https://x.com/SlimaniA10996" },
  { icon: <FaDev />, path: "https://dev.to/med_amine_slimani" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/med-amine-slimani/",
  },
];

export const stats = [
  { num: 21, text: "Months of experience" },
  { num: 11, text: "Prejects completed" },
  { num: 12, text: "Technologies mastered" },
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
    description: "Mall landing page ",
    stack: [{ name: "NextJs" }, { name: "Tailwind" }, { name: "Strapi" }],
    image: "/assets/work/boumiza.png",
    live: "https://www.boumizasquare.com",
    github: "",
  },
  {
    num: "04",
    as: "Frontend Developer",
    title: "The 21",
    description: "A coffee landing page ",
    stack: [{ name: "reactJs" }, { name: "Tailwind" }],
    image: "/assets/work/the21.png",
    live: "https://the21.vercel.app/",
    github: "",
  },
  {
    num: "05",
    as: "Backend Developer",
    title: "Kotteb",
    description: "Quran mobile application ",
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
      "Collection of reusable components with clearly defined standards for use",
    stack: [{ name: "ReactJs" }, { name: "Scss" }],
    image: "/assets/work/designSystem.png",
    live: "",
    github: "",
  },
  {
    num: "07",
    as: "FullStack Developer",
    title: "SoftyNote",
    description: "A Notion clone.",
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
      "delightful mobile application that serves as a vibrant marketplace for handmada treasures.",
    stack: [{ name: "ReactNative" }, { name: "Tailwind" }, { name: "Prisma" }],
    image: "/assets/work/crafty.png",
    live: "https://www.behance.net/gallery/184259695/Crafty",
    github: "",
  },
  {
    num: "09",
    as: "FullStack Developer",
    title: "Ixamee",
    description: "E-learning platform",
    stack: [{ name: "NextJs" }, { name: "Tailwind" }, { name: "Prisma" }],
    image: "/assets/work/ixamee.png",
    live: "https://ixamee.vercel.app/login",
    github: "",
  },
  {
    num: "10",
    as: "Backend Developer",
    title: "DayTask",
    description: "task managment mobile application",
    stack: [{ name: "NestJs" }, { name: "TypeOrm" }, { name: "PostgreSQL" }],
    image: "/assets/work/dayTask.png",
    live: "",
    github: "https://github.com/slimani-amine/DayTask-Backend.git",
  },
  {
    num: "11",
    as: "FullStack Developer",
    title: "Exclusive",
    description: "E-commrece web application",
    stack: [{ name: "NextJs" }, { name: "Tailwind" }, { name: "Prisma" }],
    image: "/assets/work/exclusive.png",
    live: "",
    github: "https://github.com/slimani-amine/E-commerce.git",
  },
  {
    num: "12",
    as: "Frontend Developer",
    title: "The Wild Oasis",
    description: "Hotel managment web application",
    stack: [{ name: "ReactJs" }, { name: "Tailwind" }, { name: "Supabase" }],
    image: "/assets/work/the-wild-oasis.png",
    live: "",
    github: "https://github.com/slimani-amine/the-wild-oasis.git",
  },
  {
    num: "13",
    as: "Backend Developer",
    title: "Bazaar",
    description: "E-commrece web application",
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
