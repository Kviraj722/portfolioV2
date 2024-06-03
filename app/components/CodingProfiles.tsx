import React from "react";
import GithubProfile from "./GithubProfile";
import LeetCodeProfile from "./LeetCodeProfile";
import Heading from "./Heading";

const CodingProfiles = () => {
  return (
    <div>
      <Heading heading="Profiles" />
      <div className="flex flex-wrap container justify-evenly mt-5 mb-5">
        <GithubProfile />
        <LeetCodeProfile />
      </div>
    </div>
  );
};

export default CodingProfiles;
