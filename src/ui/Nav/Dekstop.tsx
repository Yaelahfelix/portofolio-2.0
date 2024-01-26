"use client"

import { NavList } from "./NavList";
import Image from "next/image";

export default function NavDekstop() {
  return (
    <header className='hidden lg:block fixed h-[100dvh] w-20'>
      <nav className=" flex flex-col justify-between h-full items-center p-10">
        <h3 className="">
          FF
        </h3>
        <div className='flex flex-col gap-5 items-center'>
          <hr className="w-24 transform -rotate-90 -translate-y-14 border-teal-300"/>
          {NavList.map(nav => (

            <div className="w-7 h-7 relative" key={nav.name}>
              <Image src={"/icon/contact/" + nav.file} alt={nav.name} fill />

            </div>
          ))}

        </div>
      </nav>
    </header>
  )
}
