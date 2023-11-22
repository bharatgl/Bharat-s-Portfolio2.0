import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
