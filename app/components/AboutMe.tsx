import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Heading from "./Heading";

const AboutMe = () => {
  return (
    <>
      <Heading heading="Meet Viraj:" />
      <div className="flex justify-center items-center container mt-7 rounded-md text-white">
        <div className="max-w-4xl p-8">
          <div className="mt-5 w-full p-6 rounded-lg shadow-lg bg-stone-950">
            <p className="mt-4 leading-relaxed text-lg">
              I am Viraj Kawa, hailing from Gujarat,{" "}
              <span className="text-blue-400 italic font-bold">India</span> 🇮🇳.
              I hold a Bachelor of Technology degree in{" "}
              <span className="text-blue-400 italic font-bold">
                Computer Engineering
              </span>{" "}
              and currently work as a{" "}
              <span className="text-blue-400 italic font-bold">
                Software Development Engineer{" "}
              </span>
              at Tuvoc Technologies, PVT LTD, Ahmedabad, Gujarat. My expertise
              lies in the{" "}
              <span className="text-blue-400 italic font-bold">MERN stack</span>
              , including Node.js, React.js, Next.js, and MongoDB, with
              additional proficiency in Express.js and TypeScript.
            </p>
            <p className="mt-4 leading-relaxed text-lg">
              Designing websites has always been a passion of mine. I&apos;ve
              explored various design elements and libraries, with some of my
              favorites being{" "}
              <span className="text-blue-400 italic font-bold">
                Tailwind CSS, ShadCN UI, Next UI, Material UI, and Daisy UI
              </span>{" "}
              Tailwind CSS, ShadCN UI, Next UI, and Daisy UI. I am constantly
              eager to learn new technologies and I love the feeling of finally
              discovering a more{" "}
              <span className="text-blue-400 italic font-bold">efficient</span>{" "}
              solution to a problem.
            </p>
            <p className="mt-4 leading-relaxed text-lg">
              When I&apos;m not immersed in coding, I enjoy playing video games,
              watching YouTube, and listening to podcasts. I also have a keen
              interest in learning new things, particularly psychology and the
              ancient legends of India. Additionally, I&apos;m exploring{" "}
              <span className="text-blue-400 italic font-bold">AI/ML</span>,
              adding another dimension to my skill set.
            </p>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default AboutMe;
