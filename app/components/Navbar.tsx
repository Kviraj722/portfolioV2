import React from "react";
import Linkdeln from "@/public/Linkdeln.png";
import Github from "@/public/github.png";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  const navs = ["About me", "Experiance", "Project", "Contact me"];
  const socialLinks = [
    {
      id: 1,
      name: "Linkdeln",
      icon: Linkdeln,
      url: "https://www.linkedin.com/in/kawa-viraj-551024205/",
    },
    {
      id: 2,
      name: "Github",
      icon: Github,
      url: "https://www.github.com/kviraj722",
    },
  ];
  return (
    <div className="container flex justify-center items-center p-2 mt-2 rounded-full w-auto bg-stone-950 ">
      {/* <div className="underline font-mono font-bold text-2xl -rotate-12 scale-75 translate-x-4 skew-y-3">
        <span className="text-primary-blue">K</span>viraj
      </div> */}
      <div className="flex gap-3 flex-wrap">
        {navs.map((nav, i) => (
          <div
            key={i}
            className="p-1 w-32 items-center text-center transition-all ease-in duration-75 hover:bg-primary-blue hover:text-white rounded-3xl cursor-pointer"
          >
            {nav}
          </div>
        ))}
      </div>
      {/* <div className="flex gap-4">
        {socialLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            <Image src={link.icon} alt={link.name} width={30} height={30} />
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default Navbar;
