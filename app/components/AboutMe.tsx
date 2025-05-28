import React from "react";

const AboutMe = () => {
  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto">
        <div className="modern-card p-8 space-y-6">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-gray-300">
              Hi, I&apos;m <span className="gradient-text font-bold">Viraj Kawa</span> from Gujarat, <span className="gradient-text font-semibold">India</span> 🇮🇳. I&apos;m a passionate <span className="gradient-text font-semibold">Software Developer Engineer</span> with a B.Tech in Computer Engineering. I thrive on building robust, scalable web solutions and leading teams to deliver high-quality products.
            </p>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold gradient-text mb-2">Key Achievements</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Top <span className="font-bold">19.36%</span> and <span className="font-bold">1600+</span> rating at <a href="https://leetcode.com" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">Leetcode</a>.</li>
                <li>Solved over <span className="font-bold">400+</span> Data Structures and Algorithms questions on <a href="https://leetcode.com" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">Leetcode</a> and <a href="https://geeksforgeeks.org" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">GeeksForGeeks</a>.</li>
                <li>Developed the <span className="font-bold">TX2023 hackathon</span> website, selling <span className="font-bold">1000+</span> tickets in under a day, efficiently managing user traffic and reducing server load by <span className="font-bold">20%</span>.</li>
                <li>Co-Lead and <span className="font-bold">DSA lead</span> at Google Developer Students Club (GDSC).</li>
                <li>Recognized as <span className="font-bold">Employee of the Month (September 2024)</span> for strong leadership and high-impact work. <a href="https://drive.google.com/file/d/17jNvhGoq3rEEHXvRNAJsf4aCNhA557gC/view" className="text-blue-400 underline">Appreciation Post</a> & <a href="https://drive.google.com/file/d/1YITk1xIFuVa_24M-cYEImInAD_0tRYcz/view" className="text-blue-400 underline">Words from CEO</a>.</li>
                <li>Guided <span className="font-bold">250+</span> students in Data Structures and Algorithms.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
