import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Ask AI",
      description:
        "Ask AI is a web application that allows users to ask questions and get answers from a PDF file by AI.",
      link: "https://askai-pdf.vercel.app",
      status: true,
      techStacks: ["Langchain", "FastAPI", "React", "TailwindCSS", "Python"],
    },
    {

      title: "Buddy.File.share",
      description: "A File sharing application built on Next.js 13.",
      link: "https://file-sharing-dusky.vercel.app",
      status: true,
      techStacks: ["Next.js", "Firebase", "TailwindCSS"],
    },
    {
      title: "DevDetective",
      description:
        "A tool that can retrieve any GitHub user's profile, including their repositories, followers, and more.",
      link: "https://devdetective-kviraj.vercel.app",
      status: true,
      techStacks: ["HTML5", "CSS", "JavaScript", "Github APIs"],
    },
  ];
  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="modern-card p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 group"
          >
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-2 group-hover:underline">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 min-h-[60px]">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStacks.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="modern-button w-full text-center mt-2"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
