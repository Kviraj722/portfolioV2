"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
    <div className="max-w-sm mx-auto bg-black shadow-md rounded-md overflow-hidden">
      {profileData && (
        <>
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{profileData.name}</h2>
            <p className="text-white">@{profileData.login}</p>
            <p className="text-white mb-4">{profileData.bio}</p>
            <p className="text-white mb-4">
              Repositories: {profileData.public_repos}
            </p>
            <p className="text-white mb-4">Company: {profileData.company}</p>
            <p className="text-white mb-4"> Location: {profileData.location}</p>
            <Link
              href={profileData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Profile
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default GithubProfile;
