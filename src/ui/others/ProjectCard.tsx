'use client'

import React, { useState } from "react"
import { motion } from "framer-motion"

const ProjectCard: React.FC = () => {
  const [titleHover, setTitleHover] = useState(false)
  return (
    <motion.div className="flex w-full rounded-xl overflow-hidden shadow bg-gradient-to-tr from-slate-400 via-neutral-300 to-teal-200"
      onHoverStart={() => setTitleHover(true)}
      onHoverEnd={() => setTitleHover(false)}

    >
      <div className="w-4/12 bg-white">

      </div>
      <motion.div className=" w-8/12 text-black px-10 py-20" >

        {/* Title */}
        <motion.div animate={{
          y: titleHover ? -20 : 0
        }}>
          <motion.h4 animate={{
            fontSize: titleHover ? "30px" : "50px"
          }}>SiPintarBNI</motion.h4>
          <motion.h6 animate={{
            fontSize: titleHover ? "14px" : "16px"
          }}>Typescript, React</motion.h6>
        </motion.div>

        {/* Desc */}
        <motion.div>
          <motion.p
            className="text-[14px]"
            animate={{
              opacity: titleHover ? 1 : 0,
              height: titleHover  ? "auto" : 0
            }}
          >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard
