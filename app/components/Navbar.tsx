// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Hamburger from "hamburger-react";

// const Navbar = () => {
//   const navs = [
//     { name: "About me", id: "about-me" },
//     { name: "Experience", id: "experience" },
//     { name: "Projects", id: "projects" },
//     { name: "Profiles", id: "profiles" },
//     { name: "Skills", id: "skills" },
//   ];

//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const closeMenu = () => setIsOpen(false);

//   return (
//     <>
//       <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4">
//         <div className="mx-auto max-w-6xl">
//           <div
//             className={`flex items-center justify-between rounded-full border border-white/10 shadow-lg backdrop-blur-md transition-colors duration-300 ${
//               scrolled ? "bg-white/10" : "bg-white/5"
//             }`}
//           >
//             {/* LEFT: Favicon */}
//             <div className="flex items-center px-4 py-2">
//               <Link href="/">
//                 <Image
//                   src="/White BG.svg"
//                   alt="logo"
//                   width={28}
//                   height={28}
//                   className="rounded-full"
//                 />
//               </Link>
//             </div>

//             {/* CENTER: Nav Links */}
//             <div className="hidden md:flex items-center justify-center gap-1 px-2 py-1 flex-1">
//               {navs.map((nav, i) => (
//                 <Link
//                   href={`#${nav.id}`}
//                   key={i}
//                   className="px-3 py-2 text-sm text-white/90 hover:text-white rounded-full hover:bg-white/10 focus-ring"
//                 >
//                   {nav.name}
//                 </Link>
//               ))}
//             </div>

//             {/* RIGHT: Say Hiii */}
//             <div className="hidden md:flex items-center px-4 py-2">
//               <Link
//                 href="#contact-me"
//                 className="px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-full hover:bg-white/20 transition"
//               >
//                 Say Hiii 👋
//               </Link>
//             </div>

//             {/* Mobile Menu */}
//             <div className="md:hidden flex items-center justify-between w-full px-3 py-2">
//               <Link href="/">
//                 <Image
//                   src="/favicon.ico"
//                   alt="logo"
//                   width={24}
//                   height={24}
//                   className="rounded-full"
//                 />
//               </Link>
//               <Hamburger toggled={isOpen} toggle={setIsOpen} size={22} rounded />
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md md:hidden"
//           onClick={closeMenu}
//         >
//           <div
//             className="absolute top-24 left-4 right-4 rounded-2xl border border-white/10 bg-white/10 p-3 shadow-xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {[...navs, { name: "Say Hiii 👋", id: "contact-me" }].map((nav, i) => (
//               <Link
//                 href={`#${nav.id}`}
//                 key={i}
//                 onClick={closeMenu}
//                 className="block w-full text-center px-4 py-3 text-base font-medium text-white/90 rounded-xl hover:bg-white/15 hover:text-white focus-ring"
//               >
//                 {nav.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled ? "scale-[0.98]" : "scale-100"
        }`}
      >
        <div className="mx-auto max-w-6xl">
          <div
            className={`flex items-center justify-between rounded-full border border-white/20 shadow-lg backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              scrolled
                ? "bg-white/30 shadow-2xl backdrop-saturate-150"
                : "bg-white/10 backdrop-saturate-100"
            }`}
          >
            {/* LEFT: Favicon */}
            <div className="flex items-center px-4 py-2">
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
            <div className="hidden md:flex items-center justify-center gap-1 px-2 py-1 flex-1">
              {navs.map((nav, i) => (
                <Link
                  href={`#${nav.id}`}
                  key={i}
                  className="px-3 py-2 text-sm text-white/90 hover:text-white rounded-full hover:bg-white/20 focus-ring transition-all duration-300"
                >
                  {nav.name}
                </Link>
              ))}
            </div>

            {/* RIGHT: Say Hiii */}
            <div className="hidden md:flex items-center px-4 py-2">
              <Link
                href="#contact-me"
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-white/20 to-white/10 rounded-full hover:from-white/30 hover:to-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                Say Hiii 👋
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center justify-between w-full px-3 py-2">
              <Link href="/">
                <Image
                  src="/favicon.ico"
                  alt="logo"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </Link>
              <Hamburger toggled={isOpen} toggle={setIsOpen} size={22} rounded />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md md:hidden animate-fade-in"
          onClick={closeMenu}
        >
          <div
            className="absolute top-24 left-4 right-4 rounded-2xl border border-white/10 bg-white/10 p-3 shadow-xl backdrop-blur-xl transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {[...navs, { name: "Say Hiii 👋", id: "contact-me" }].map((nav, i) => (
              <Link
                href={`#${nav.id}`}
                key={i}
                onClick={closeMenu}
                className="block w-full text-center px-4 py-3 text-base font-medium text-white/90 rounded-xl hover:bg-white/15 hover:text-white transition-all duration-200"
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
