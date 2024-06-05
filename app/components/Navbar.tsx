// import React from "react";
// import Linkdeln from "@/public/Linkdeln.png";
// import Github from "@/public/github.png";
// import Link from "next/link";
// import Image from "next/image";
// const Navbar = () => {
//   const navs = [
//     "About me",
//     "Experiance",
//     "Project",
//     "Testimonials",
//     "Profiles",
//     "Skills",
//     "Contact me",
//   ];
//   return (
//     <div className="container flex justify-center items-center p-2 mt-2 rounded-full bg-stone-950 ">
//       <div className="flex gap-2 flex-wrap w-auto">
//         {navs.map((nav, i) => (
//           <div
//             key={i}
//             className="p-1 w-32 items-center text-center transition-all ease-in duration-75 hover:bg-primary-blue hover:text-white rounded-3xl cursor-pointer"
//           >
//             {nav}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const navs = [
    "About me",
    "Experience",
    "Project",
    "Testimonials",
    "Profiles",
    "Skills",
    "Contact me",
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto p-2 mt-2 bg-transparent">
      <div className="flex justify-center  bg-transparent p-4 rounded-full">
        <div className="hidden md:flex gap-2">
          {navs.map((nav, i) => (
            <Link
              href={`#${nav.toLowerCase().replace(" ", "-")}`}
              key={i}
              className="p-1 w-32 text-center transition-all ease-in duration-75 hover:bg-primary-blue hover:text-white rounded-3xl cursor-pointer"
            >
              {nav}
            </Link>
          ))}
        </div>
      </div>
      <div className="md:hidden items-center flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
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
        <div className="md:hidden mt-2 bg-stone-950 p-4 rounded-lg">
          {navs.map((nav, i) => (
            <Link
              href={`#${nav.toLowerCase().replace(" ", "-")}`}
              key={i}
              className="block p-2 text-center transition-all ease-in duration-75 hover:bg-primary-blue hover:text-white rounded-lg cursor-pointer"
            >
              {nav}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
