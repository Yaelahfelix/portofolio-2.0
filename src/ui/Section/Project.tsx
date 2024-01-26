'use client'

import { useEffect, useState } from "react";
import ProjectCard from "../others/ProjectCard"
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";

export default function ProjectSection() {

  return (
    <section className="section-default">
        <motion.h1 
        initial={{ fontSize: '10em' }}
        whileInView={{ fontSize: '5em'}}
        transition={{ duration: 0.3 }}
        className="title"
      >
        Projects
      </motion.h1>
      <ProjectCard/>

    </section>
  )
}
