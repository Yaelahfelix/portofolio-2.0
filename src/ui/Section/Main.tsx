"use client";

import { useEffect, useState } from "react";
import NavDekstop from "../Nav/Dekstop";
import HomeSection from "./Home";
import AboutSection from "./About";
import ProjectSection from "./Project";
import ContactPage from "./Contact";
import { ExperienceDekstopSection, ExperienceMobileSection } from "./Exp";
import CertifiaceSection from "./Certificate";
import Header from "../Nav/Header";

export default function Main() {
  const [isDesktopView, setIsDesktopView] = useState(window.innerWidth >= 1024);

  return (
    <main className={`flex  text-white`}>
      <NavDekstop />
      <section className="w-full z-30 relative">
        {/* <Header /> */}
        <HomeSection />
        <AboutSection />
        <section className="hidden md:block">
          <ExperienceDekstopSection />
        </section>
        <section className="md:hidden">
          <ExperienceMobileSection />
        </section>
        <ProjectSection />
      </section>
    </main>
  );
}
