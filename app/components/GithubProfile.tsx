"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ZapIcon } from "lucide-react";
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
        console.log(data);
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
    <div className="bg-black text-white shadow-md rounded-md overflow-hidden w-full sm:w-1/2 lg:w-1/3 max-w-sm m-4">
      {loading && <p className="p-4">Loading...</p>}
      {error && <p className="p-4">Error: {error}</p>}
      {profileData && (
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <FaGithub />
            {profileData.name}
          </h2>
          <p className="text-gray-400">@{profileData.login}</p>
          <p className="mt-2">{profileData.bio}</p>
          <div className="mt-4">
            <p className="flex items-center mb-2">
              <span className="mr-2 text-green-500">Repositories:</span>
              {profileData.public_repos}
            </p>
            <p className="flex items-center mb-2">
              <span className="mr-2 text-blue-500">Company:</span>
              {profileData.company}
            </p>
            <p className="flex items-center mb-2">
              <span className="mr-2 text-yellow-500">Location:</span>
              {profileData.location}
            </p>
          </div>
          <Link
            href={profileData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-4 inline-block"
          >
            View Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default GithubProfile;
