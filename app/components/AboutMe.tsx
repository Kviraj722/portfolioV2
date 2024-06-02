import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Heading from "./Heading";

const AboutMe = () => {
  const ParaOne =
    "I am Viraj Kawa, hailing from Gujarat, India 🇮🇳. I hold a Bachelor of Technology degree in Computer Engineering and currently work as a Software Development Engineer at Tuvoc Technologies, PVT LTD, Ahmedabad, Gujarat. My expertise lies in the MERN stack, including Node.js, React.js, Next.js, and MongoDB, with additional proficiency in Express.js and TypeScript. Designing websites has always been a passion of mine. I've explored various design elements and libraries, with some of my favorites being Tailwind CSS, ShadCN UI, Next UI, and Daisy UI. I am constantly eager to learn new technologies and am currently seeking a full-time or remote part-time position as a React developer. When I'm not immersed in coding, I enjoy playing video games, watching YouTube, and listening to podcasts. I also have a keen interest in learning new things, particularly psychology and the ancient legends of India. Additionally, I'm learning how to cook, adding another dimension to my skill set.";
  // const ParaTwo = "";
  // const ParaThree =
  // "When I'm not immersed in coding, I enjoy playing video games, watching YouTube, and listening to podcasts. I also have a keen interest in learning new things, particularly psychology and the ancient legends of India. Additionally, I'm learning how to cook, adding another dimension to my skill set.";
  return (
    <div className="container mt-2">
      <Heading heading="Meet Viraj: " />

      <div className="border-1 mt-5 w-full max-h-screen overflow-scroll p-2 rounded-lg shadow-blurred-border bg-stone-950">
        {/* <TextGenerateEffect words={ParaOne} /> */}
        <p>
          I am Viraj Kawa, hailing from Gujarat, India 🇮🇳. I hold a Bachelor of
          Technology degree in Computer Engineering and currently work as a
          Software Development Engineer at Tuvoc Technologies, PVT LTD,
          Ahmedabad, Gujarat. My expertise lies in the MERN stack, including
          Node.js, React.js, Next.js, and MongoDB, with additional proficiency
          in Express.js and TypeScript.
        </p>
        <p>
          Designing websites has always been a passion of mine. I've explored
          various design elements and libraries, with some of my favorites being
          Tailwind CSS, ShadCN UI, Next UI, and Daisy UI. I am constantly eager
          to learn new technologies and am currently seeking a full-time or
          remote part-time position as a React developer.
        </p>
        <p>
          When I'm not immersed in coding, I enjoy playing video games, watching
          YouTube, and listening to podcasts. I also have a keen interest in
          learning new things, particularly psychology and the ancient legends
          of India. Additionally, I'm learning how to cook, adding another
          dimension to my skill set.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
