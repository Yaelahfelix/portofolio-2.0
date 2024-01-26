'use client'

import { useEffect, useState } from "react";
import NavDekstop from "../Nav/Dekstop";
import HomeSection from "./Home";
import AboutSection from "./About";
import ProjectSection from "./Project";
import ContactPage from "./Contact";

export default function Main() {
  const [isDesktopView, setIsDesktopView] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopView(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isDesktopView ? (
        <main className="flex bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-700 via-slate-800 to-slate-900 text-white">
          <NavDekstop />
          <section className='w-full  z-30'>
            <HomeSection />
            <AboutSection />
            <ProjectSection />
            <ContactPage />
          </section>

        </main>

      ) : (
        <main className='h-[100dvh] bg-slate-900 text-white flex items-center text-center p-5'>
          <h1>Website is not avaible in mobile and table view because website is under construction! Please open on dekstop</h1>
        </main>

      )}

    </>
  )
}
