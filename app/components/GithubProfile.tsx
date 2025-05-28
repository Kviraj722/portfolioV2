"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";

const GithubProfile = () => {
  const [profileData, setProfileData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/kviraj722`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProfileData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProfile();
  }, []);

  return (
    <div className="modern-card p-6 flex flex-col justify-between min-h-[340px]">
      {loading && <p className="p-4">Loading...</p>}
      {error && <p className="p-4 text-red-400">Error: {error}</p>}
      {profileData && (
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 mb-2">
            <FaGithub className="text-2xl text-gray-400" />
            <h2 className="text-2xl font-bold gradient-text">{profileData.name}</h2>
          </div>
          <p className="text-gray-400 mb-1">@{profileData.login}</p>
          <p className="mb-3 text-gray-300">{profileData.bio}</p>
          <div className="flex flex-wrap gap-4 mb-4">
            <span className="text-green-400 font-semibold">Repos: {profileData.public_repos}</span>
            {profileData.company && <span className="text-blue-400 font-semibold">{profileData.company}</span>}
            {profileData.location && <span className="text-yellow-400 font-semibold">{profileData.location}</span>}
          </div>
          <Link
            href={profileData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="modern-button w-full text-center mt-auto"
          >
            View GitHub Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default GithubProfile;
