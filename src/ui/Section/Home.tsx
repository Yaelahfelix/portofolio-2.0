'use client'

import dynamic from "next/dynamic";
import SkillAnimation from "../others/SkillAnimation";
import Image from "next/image";
const BubbleBackground = dynamic(() => import("../others/BubbleEffect"), {
  ssr: false,
});

export default function HomeSection() {
  return (
    <div className='section-default flex flex-col lg:flex-row items-center justify-between relative overflow-hidden'>
      <BubbleBackground/>
      <div className='lg:w-6/12 z-30'>
        <h3 className="-mb-3">Hi</h3>
        <h1>I&apos;m Ferdinand Felix</h1>
        <p className="text-teal-300">A Fullstack Software Engineer</p>
        <SkillAnimation />
        <button className="mt-5 px-6 py-4 border-white border rounded-r-xl transition-colors hover:border-teal-300 hover:text-teal-300">Check out my projects here!</button>
      </div>
      <div className='lg:w-6/12 flex justify-center'>
        <div className="relative w-64 h-80">
        <Image src="/felix.jpeg" fill alt="Ferdinand Felix"/>
        </div>
      </div>
    </div>

  )
}
