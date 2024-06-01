"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProjectType } from "@/lib/project";
import { Slide } from "react-slideshow-image";
import Image from "next/image";

const ProjectCard: React.FC<ProjectType> = ({
  description,
  typeProject,
  title,
  skills,
  images,
}) => {
  return (
    <div className="slide-container w-full md:w-6/12 lg:w-4/12 bg-white shadow-[-2px_10px_23px_4px_#718096] rounded-lg overflow-hidden">
      <Slide>
        {images.map((slideImage, index) => (
          <div key={index}>
            <div className="relative w-full aspect-[3/1]">
              <Image src={"/project" + slideImage.url} fill alt="" />
            </div>
          </div>
        ))}
      </Slide>
      <div className="text-black">
        <div className="px-5 py-4">
          <h6 className="font-bold text-teal-700">{title}</h6>
          <p className="text-sm">{typeProject}</p>
          <p className="text-slate-600 text-xs">{skills}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
