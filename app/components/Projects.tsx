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
    },
    {
      title: "Grab a bite",
      description:
        "Grab a bite is a food recommandation app which allow users to find their favourite spot nearby.",
      link: "food-rec-viraj.vercel.app",
      status: false,
    },
    {
      title: "DevDetective",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://devdetective-kviraj.vercel.app",
      status: true,
    },
  ];
  return (
    <div>
      <Heading heading="Project" />
      <div className="border-1 h-screen flex overflow-x-scroll container shadow-blurred-border rounded-lg p-2">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default Projects;
