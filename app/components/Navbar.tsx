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
    <nav className="container mx-auto relative">
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
            className={`${
              isOpen ? "bg-white" : "bg-black"
            } w-6 h-6 rounded-full transition-transform transform duration-75`}
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
      <div
        className={`md:hidden p-4 rounded-lg w-full absolute h-full ${
          isOpen ? "translate-x-0 backdrop-blur-lg z-[999]" : "translate-x-full"
        }  transition transform duration-300 ease-in-out`}
      >
        <div className="h-screen p-2 backdrop-filter backdrop-blur-[20px] rounded-[10px]">
          {navs.map((nav, i) => (
            <Link
              href={`#${nav.id}`}
              key={i}
              className="block p-2 text-center bg-gray-900 hover:bg-primary-blue hover:text-white cursor-pointer"
            >
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
