"use client";
import React, { useState } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";
const Navbar = () => {
  const navs = [
    { name: "About me", id: "about-me" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Profiles", id: "profiles" },
    { name: "Skills", id: "skills" },
    { name: "Contact me", id: "contact-me" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="container relative">
        <div className="justify-center w-full md:flex hidden p-4 rounded-full">
          <div className="hidden md:flex">
            {navs.map((nav, i) => (
              <Link
                href={`#${nav.id}`}
                key={i}
                className="p-1 w-32 text-center transition-all ease-in duration-75 hover:bg-primary-blue hover:text-white rounded-3xl cursor-pointer"
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="md:hidden items-center flex justify-end p-3">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={25} rounded />
        </div>
      </nav>
      <div
        className={`md:hidden p-4 rounded-lg w-full absolute h-fit ${
          isOpen ? "translate-x-0 backdrop-blur-lg z-[999]" : "translate-x-full"
        } `}
      >
        <div className="h-screen p-2 rounded-[10px] w-full">
          {navs.map((nav, i) => (
            <Link
              href={`#${nav.id}`}
              key={i}
              className="block p-2 text-center font-semibold text-xl rounded-2xl hover:bg-primary-blue hover:text-white cursor-pointer"
            >
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
