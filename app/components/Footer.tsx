import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-sans py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          <span className="text-blue-500">&copy;</span> 2024{" "}
          <span className="text-blue-500">Viraj Kawa</span>. All rights
          reserved.
        </p>
        <p className="text-sm mt-2">
          About this website: built with React & Next.js (App Router & Server
          Actions), TypeScript, Tailwind CSS, Framer Motion, Nodemailer,
          Aceternity UI, Vercel hosting and SwiperJs.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
