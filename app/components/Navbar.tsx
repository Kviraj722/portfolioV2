"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const navs = [
    { name: "About me", id: "about-me" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Profiles", id: "profiles" },
    { name: "Skills", id: "skills" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`flex items-center justify-between rounded-full border transition-all duration-500
            ${
              scrolled
                ? "bg-white/10 border-white/20 backdrop-blur-xl shadow-lg shadow-white/10"
                : "bg-white/5 border-white/10 backdrop-blur-md"
            }`}
        >
          {/* LEFT: Logo */}
          <div className="hidden md:flex items-center px-4 py-2">
            <Link href="/">
              <Image
                src="/White BG.svg"
                alt="logo"
                width={28}
                height={28}
                className="rounded-full"
              />
            </Link>
          </div>

          {/* CENTER: Nav Links */}
          <div className="hidden md:flex items-center justify-center gap-4 px-2 py-1 flex-1">
            {navs.map((nav, i) => (
              <motion.div
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ type: "spring", stiffness: 250 }}
                key={i}
              >
                <Link
                  href={`#${nav.id}`}
                  className="relative px-4 py-2 text-sm text-gray-300 rounded-full transition-all duration-300 hover:text-white
                             before:absolute before:inset-0 before:rounded-full before:border before:border-white/0 
                             hover:before:border-white/30 before:scale-90 hover:before:scale-100 
                             before:transition-all before:duration-300 before:content-['']"
                >
                  {nav.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Say Hiii Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="hidden md:flex items-center px-4 py-2"
          >
            <Link
              href="#contact-me"
              className="px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-full 
                         hover:bg-white/20 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              Say Hiii 👋
            </Link>
          </motion.div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center justify-between w-full px-3 py-2">
            <Link href="/">
              <Image
                src="/White BG.svg"
                alt="logo"
                width={24}
                height={24}
                className="rounded-full"
              />
            </Link>
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={22} rounded />
          </div>
        </motion.div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md md:hidden"
          onClick={closeMenu}
        >
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute top-24 left-4 right-4 rounded-2xl border border-white/10 bg-white/10 p-3 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {[...navs, { name: "Say Hiii 👋", id: "contact-me" }].map(
              (nav, i) => (
                <Link
                  href={`#${nav.id}`}
                  key={i}
                  onClick={closeMenu}
                  className="block w-full text-center px-4 py-3 text-base font-medium text-white/90 rounded-xl 
                             hover:bg-white/15 hover:text-white transition-all duration-300"
                >
                  {nav.name}
                </Link>
              )
            )}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Navbar;
