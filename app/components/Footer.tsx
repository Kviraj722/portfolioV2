import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black/80 text-white font-sans py-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-2 px-4">
        <p className="text-sm">
          <span className="text-blue-500">&copy;</span> 2024 <span className="gradient-text font-bold">Viraj Kawa</span>. All rights reserved.
        </p>
        <p className="text-sm">
          About this website: built with React &amp; Next.js (App Router &amp; Server Actions), TypeScript, Tailwind CSS, Framer Motion, Nodemailer, Aceternity UI, Vercel hosting and SwiperJs.
        </p>
        <p className="text-sm mt-2 flex items-center justify-center gap-1">
          <span>Made with</span>
          <span className="text-red-500 animate-pulse">&#10084;&#65039;</span>
          <span>in</span>
          <span className="text-lg">🇮🇳</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
