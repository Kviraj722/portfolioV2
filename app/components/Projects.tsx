import React from "react";
import Heading from "./Heading";
import { HoverEffect } from "./ui/card-hover-effect";

const Projects = () => {
  const projects = [
    {
      title: "Buddy.File.share",
      description: "A File sharing application build on Next.Js 13",
      link: "https://file-sharing-dusky.vercel.app",
      status: true,
      techStacks: ["NextJs", "Firebase", "TailwindCSS"],
    },
    {
      title: "Grab a bite",
      description:
        "Grab a bite is a food recommandation app which allow users to find their favourite spot nearby.",
      link: "https://food-rec-viraj.vercel.app",
      status: false,
      techStacks: ["NextJs", "MongoDB", "TailwindCSS"],
    },
    {
      title: "DevDetective",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://devdetective-kviraj.vercel.app",
      status: true,
      techStacks: ["HTML5", "CSS", "JavaScript", "Github APIs"],
    },
  ];
  return (
    <div className="mt-10 mb-10">
      <Heading heading="Notable projects:" />
      <div className="mt-6 flex container rounded-lg p-2">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default Projects;
