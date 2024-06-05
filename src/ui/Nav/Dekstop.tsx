"use client";

import { useEffect, useState } from "react";
import { NavList } from "./NavList";
import Image from "next/image";
import Link from "next/link";

export default function NavDekstop() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed z-40 transition-all duration-500 w-full ${
        scrolled &&
        "bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 bg-slate-900 "
      }`}
    >
      <nav className=" flex justify-between h-full items-center px-10 py-5 gap-5">
        <h3 className="">FF</h3>

        <div className="flex items-center gap-5">
          {NavList.map((nav) => (
            <Link href={nav.href} className="w-7 h-7 relative hover:scale-125 transition-transform" key={nav.name} target="_blank">
              <Image src={"/icon/contact/" + nav.file} alt={nav.name} fill />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
