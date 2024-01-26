'use client'

import { motion } from "framer-motion"
export default function AboutSection() {
  return (
    <motion.div

      className="section-default relative flex gap-10 justify-between items-center">
      <h2 className="transform h-full -rotate-90">About Me</h2>
      <motion.div className=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}

      >
        <p className="w-6/12 mb-5">I demonstrate robust leadership abilities, having assumed the role of the head of the student council during my time in vocational school. Additionally, I actively participated in the provincial student council community and successfully founded an educational organization. </p>
        <p className="w-6/12">My aptitude for rapid learning, coupled with a profound interest in technology, has equipped me with a basic understanding of AI, Linux, and advanced skills in web programming. Proficient in multimedia, I am committed to continuous growth and mastery in diverse fields, with a specific focus on software development as a software engineer.</p>
      </motion.div>
      <div className="w-10 h-10 bg-white">
      </div>
    </motion.div>
  )
}
