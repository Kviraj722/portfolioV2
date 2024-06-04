import React from "react";
import Linkdeln from "@/public/Linkdeln.png";
import Github from "@/public/github.png";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  const navs = [
    "About me",
    "Experiance",
    "Project",
    "Testimonials",
    "Profiles",
    "Skills",
    "Contact me",
  ];
  return (
    <div className="container flex justify-center items-center p-2 mt-2 rounded-full bg-stone-950 ">
      <div className="flex gap-2 flex-wrap w-auto">
        {navs.map((nav, i) => (
          <div
            key={i}
            className="p-1 w-32 items-center text-center transition-all ease-in duration-75 hover:bg-primary-blue hover:text-white rounded-3xl cursor-pointer"
          >
            {nav}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
