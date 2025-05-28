import React from "react";
import Link from "next/link";

const Experience = () => (
  <div className="w-full space-y-6">
    <div className="max-w-4xl mx-auto">
      <div className="modern-card p-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Tuvoc Technologies</h1>
            <p className="text-gray-400 mt-2 italic">Software Developer Engineer</p>
            <p className="text-gray-400 text-sm mt-1">Ahmedabad, Gujarat</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 font-medium">
              June 2023 – Present
            </span>
          </div>
        </div>
        <ul className="list-disc pl-6 space-y-3 text-gray-300">
          <li><span className="font-semibold">Led</span> a cross-functional team of <span className="font-bold">4 engineers</span> to deliver a feature-rich product, ensuring on-time delivery and high-quality outcomes.</li>
          <li><span className="font-semibold">Engineered</span> the backend architecture using <span className="font-bold">Application Load Balancer (ALB)</span> for high availability and consistency, contributing to a <span className="font-bold">20% revenue increase</span>.</li>
          <li><span className="font-semibold">Constructed</span> a complete CI/CD pipeline from scratch using cloud-native solutions, <span className="font-bold">reducing</span> build and deployment time by <span className="font-bold">50%</span>.</li>
          <li><span className="font-semibold">Integrated</span> Blockchain and AI-based services within a secured <span className="font-bold">VPC (Virtual Private Cloud)</span> setup, ensuring only the Node.js backend could access them. <span className="font-bold">Prevented</span> external internet access to sensitive services, <span className="font-bold">enhancing security</span> and controlling internal-only communication.</li>
          <li><span className="font-semibold">Worked directly</span> with <span className="font-bold">international clients</span>, participated in <span className="font-bold">daily scrum meetings</span>, and ensured <span className="font-bold">consistent communication</span> and alignment with <span className="font-bold">business goals</span>.</li>
        </ul>
      </div>
    </div>
    <div className="max-w-4xl mx-auto flex justify-end">
      <Link
        href="https://drive.google.com/file/d/1aFbvI9S4SUNNcs61gq4gHrlOKb4O4R5f/view"
        className="modern-button hover-lift"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Résumé
      </Link>
    </div>
  </div>
);

export default Experience;
