import React from "react";
import GithubProfile from "./GithubProfile";
import LeetCodeProfile from "./LeetCodeProfile";

const CodingProfiles = () => {
  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <GithubProfile />
        <LeetCodeProfile />
      </div>
    </div>
  );
};

export default CodingProfiles;
