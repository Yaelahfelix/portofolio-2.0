"use client";

import { orbittonFont, sourcecSansFont } from "@/lib/Fonts";
import { motion } from "framer-motion";
export default function AboutSection() {
  return (
    <motion.div className="section-default relative">
      <motion.h1
        className={`text-[56px] font-thin text-center ${orbittonFont.className}`}
      >
        About Me
      </motion.h1>
      <motion.div
        className={`${sourcecSansFont.className} text-center`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <p>
          I demonstrate robust leadership abilities, having assumed the role of
          the head of the student council during my time in vocational school.
          Additionally, I actively participated in the provincial student
          council community and successfully founded an educational
          organization.{" "}
        </p>
        <p>
          My aptitude for rapid learning, coupled with a profound interest in
          technology, has equipped me with a basic understanding of AI, Linux,
          and advanced skills in web programming. Proficient in multimedia, I am
          committed to continuous growth and mastery in diverse fields, with a
          specific focus on software development as a software engineer.
        </p>
      </motion.div>
    </motion.div>
  );
}
