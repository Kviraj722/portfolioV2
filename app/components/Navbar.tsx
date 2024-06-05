"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const navs = [
    { name: "About me", id: "about-me" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    // { name: "Testimonials", id: "testimonials" },
    { name: "Profiles", id: "profiles" },
    { name: "Skills", id: "skills" },
    { name: "Contact me", id: "contact-me" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto">
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
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className={`${isOpen ? "bg-white" : "bg-black"} w-6 h-6 rounded-full`}
            fill="none"
            stroke={isOpen ? "#000" : "currentColor"}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className={`md:hidden bg-stone-900 p-4 rounded-lg`}>
          {navs.map((nav, i) => (
            <Link
              href={`#${nav.id}`}
              key={i}
              className="block p-2 text-center transition-all ease-in duration-75 hover:bg-primary-blue hover:text-white rounded-lg cursor-pointer"
            >
              {nav.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
