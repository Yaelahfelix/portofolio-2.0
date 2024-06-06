"use client";

import { useEffect, useState } from "react";
import ProjectCard from "../others/ProjectCard";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { ProjectList } from "@/lib/project";
import { BackgroundGradientAnimation } from "../others/GradientBackground";
import { orbittonFont } from "@/lib/Fonts";

export default function ProjectSection() {
  return (
    <section className="section-default relative">
      <motion.h1
        className={`text-[48px] lg:text-[56px] font-thin text-center ${orbittonFont.className} mb-4`}
      >
        Projects
      </motion.h1>
      <div className="flex flex-col md:flex-row md:justify-around gap-7 lg:gap-5">
        {ProjectList.map((project) => (
          <ProjectCard
            title={project.title}
            typeProject={project.typeProject}
            description={project.description}
            skills={project.skills}
            key={project.title}
            images={project.images}
          />
        ))}
      </div>
    </section>
  );
}
