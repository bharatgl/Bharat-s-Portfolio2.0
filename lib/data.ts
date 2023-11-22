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
    title: "Freelancing",
    location: " Remote",
    description: "Working as a Freelancer fullstack Developer",
    // icon: React.createElement(LuGraduationCap),
    icon: React.createElement(CgWorkAlt),
    date: "Jan, 2023 - present",
  },
  {
    title: "SkillValley - FullStack Developer",
    location: "Delhi, IN (Remote)",
    description:
      "I successfully spearheaded a three-month MVP Development initiative, leading a team of five. We presented our product to over 20 founders, and our team earned recognition as a top-performing team.",
    // icon: React.createElement(LuGraduationCap),
    icon: React.createElement(CgWorkAlt),
    date: "Aug,2023 - Oct,2023",
  },
  {
    title: "Brighltanes Technologies Pvt. Ltd - Fullstack & Product Intern",
    location: "Remote",
    description:
      "As a full-stack developer, I built a coaching institute dashboard using the MERN Stack. Implemented features like Excel uploads, data visualization, CRUD operations, and user authentication. Enhanced the interface based on user feedback, achieving a 50% boost in user engagement. Ensured seamless performance for an optimal user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "March, 2023 - May, 2023",
  },
  {
    title: "DESI QNA - Full-Stack Developer",
    location: "Remote",
    description:
      "I led design and development for a Desi QnA website section, ensuring responsiveness. Conducted penetration tests for tool security, integrated Recaptcha, and collaborated on a critical front-end project with cross-functional teams.",
    icon: React.createElement(FaReact),
    date: "Sept, 2022 - March, 2023",
  },
  {
    title: "Newton School Bootcamp",
    location: "Remote",
    description:
      "I graduated from a fullstack bootcamp where I learned about the HTML, CSS, Javascript, React, Nodejs , Express , Java , Data structures and Algorithm",
    icon: React.createElement(LuGraduationCap),
    date: "Dec,2021 - June, 2023",
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
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Bootstrap",
  "SQL",
  // "GraphQL",
  // "Apollo",
  "Express",
  "PostgreSQL",
  // "Python",
  "Java",
  "Framer Motion",
] as const;
