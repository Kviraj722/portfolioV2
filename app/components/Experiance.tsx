import React from "react";
import Heading from "./Heading";
import { FaReact } from "react-icons/fa";

const Experience = () => (
  <div className="flex flex-col gap-2">
    <Heading heading="Professional History:" />
    <div className="container flex flex-col rounded-md p-6 mt-3">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-sans">Tuvoc Technologies</h1>
          <p className="text-xs mt-2 text-gray-300">
            Jr. Software Developer Engineer
          </p>
        </div>
        <p className="font-sans">
          2023 -{" "}
          <span className="bg-green-700 border-1 border-white p-1 rounded-md text-white font-semibold">
            Present
          </span>
        </p>
      </div>
      <div className="flex justify-center bg-stone-950 container">
        <div className="max-w-4xl">
          <p className="text-md leading-relaxed mt-4 mb-4">
            Tuvoc Technologies is a fast-growing web and mobile app development
            company in India, specializing in PHP, Laravel, and Custom Web and
            App Development. The company has delivered over 100+ projects
            worldwide and has been in operation for over 7 years. I joined Tuvoc
            Technologies in June 2023 as a trainee for a two-month period.
            During this time, I learned HTML, CSS, JavaScript, React, Node.js,
            and MongoDB. After completing my training, I transitioned to working
            on live client production projects, applying my skills to real-world
            scenarios and contributing to the success of the client&apos;s
            business and the company&apos;s diverse portfolio.
          </p>
          <div className="mt-4 text-base">
            <ul className="list-disc pl-5 space-y-4">
              <li>
                <p>
                  <span className="text-base font-extrabold font-mono">
                    What I had done?:{" "}
                  </span>
                  I have had the opportunity to work on three significant
                  projects: an MVP project, a jeweler-based ERP system, and an
                  NFC technology project. In these projects, my primary focus
                  has been on backend tasks, including server management and API
                  development.
                </p>
              </li>
              <li>
                <p>
                  <span className="text-base font-extrabold font-mono">
                    Impact:{" "}
                  </span>
                  Optimized queries in the ERP system, resulting in a 5-10%
                  increase in server efficiency. Reduced response times by
                  10-15%, significantly enhancing user experience (from ~1s to
                  approximately 203ms).
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
