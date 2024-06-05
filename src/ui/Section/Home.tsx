"use client";

import dynamic from "next/dynamic";
import SkillAnimation from "../others/SkillAnimation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

const BubbleBackground = dynamic(() => import("../others/BubbleEffect"), {
  ssr: false,
});

export default function HomeSection() {
  const Router = useRouter();

  return (
    <div className="section-default relative overflow-hidden flex justify-center">
      <BubbleBackground />
      <div className="w-full z-30 flex flex-col justify-center lg:w-6/12">
        <h3 className="-mb-3 text-center">Hi</h3>
        <h1 className="text-[42px] text-center">I&apos;m Ferdinand Felix</h1>
        <p className="text-teal-300 text-center">
          A Fullstack Software Engineer
        </p>
        <SkillAnimation />
        <Link className="text-center mt-5 px-6 py-4 border-white border shadow-2xl shadow-blue-500/20 transition-colors hover:bg-white hover:text-black" href="/CV_Ferdinand Felix-V2-1-1.pdf" target="_blank">
          Check Out My CV Here!
        </Link>
      </div>
      {/* <div className="w-full lg:w-6/12 flex justify-center">
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut",
          }}
          className="relative aspect-[3/4] w-72 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
        >
          <Image
            src="/felix.jpeg"
            fill
            alt="Ferdinand Felix"
            className="rounded-lg"
          />
        </motion.div>
      </div> */}
    </div>
  );
}
