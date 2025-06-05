"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">
          Mechanical Engineering and a Minor in Computer Science
        </span>
        , I dived into web development. I'm currently working as a{" "}
        <span className="font-medium">Software Development Engineer at Kapture CX</span>
        , building AI powered customer support solutions. My core stack is{" "}
        <span className="font-medium">React, Next.js, TypeScript and Node.js</span>
        . I love solving problems and exploring real-time technologies like WebSocket.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with street dogs. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">latest trends in AI.</span>
      </p>
    </motion.section>
  );
}
