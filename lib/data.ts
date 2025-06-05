import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Landings from "@/public/Landings.jpg";
import Foodbybharat from "@/public/Foodbybharat.png";
import BazaarBoost from "@/public/BazaarBoost.jpg";
import FusionSync from "@/public/FusionSync.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Kapture CX - Software Development Engineer",
    location: "Bengaluru, India",
    description:
      "Leading frontend architecture with microfrontends and AI powered features for customer support solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - present",
  },
  {
    title: "Skillvalley - SDE Intern",
    location: "Remote",
    description:
      "Built an HR and payroll platform using React, Node.js and MongoDB with a MERN based payslip generator.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Nov 2023",
  },
  {
    title: "B.Tech. Mechanical Engineering (Minor CS)",
    location: "Guru Nanak Dev Engineering College, Punjab",
    description:
      "Graduated with majors in Mechanical Engineering and minor in Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "Landings Page Collection",
    description:
      "I worked as a Front-end developer on this project  for month. Users can upload and filter new landing pages on basis of various criteria.",
    tags: ["React", , "MongoDB", "Tailwind"],
    imageUrl: Landings,
    githubUrl: "/",
    projectUrl: "https://bharatgllanding.vercel.app/",
  },
  {
    title: "Fusion Sync",
    description:
      "Elevate your team's potential with our Workforce Management Software. Streamline operations, empower employees, and drive success.: MVP created in skillvalley",
    tags: ["React", , "MongoDB", "Tailwind"],
    imageUrl: FusionSync,
    githubUrl: "https://github.com/bharatgl/Fusion-Sync",
    projectUrl: "https://fusionsync.vercel.app/",
  },
  {
    title: "BazaarBoost",
    description: "Fullstack Ecommerce for shopping",
    tags: ["React", "Tailwind", "Redux", "Node.Js", "ExpressJs", "MongoDB"],
    imageUrl: BazaarBoost,
    githubUrl: "https://github.com/bharatgl/BazaarBoost",
    projectUrl: "https://bazaar-boost.vercel.app/",
  },
  {
    title: "FoodByBharat",
    description: "Full Stack Food Delievery App.",
    tags: ["React", "Tailwind", "Redux", "Node.Js", "ExpressJs", "MongoDB"],
    imageUrl: Foodbybharat,
    githubUrl: "https://github.com/bharatgl/foodbybharat",
    projectUrl: "https://foodbybharat.netlify.app/",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Material UI",
  "Shadcn",
  "Bootstrap",
  "WebSocket",
  "Generative AI",
  "Chatbot configurations",
  "Git",
  "Linux",
  "Responsive Design",
  "Cross-Browser Compatibility",
] as const;
