"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ZapIcon } from "lucide-react";

const LeetCodeProfile = () => {
  const [profileData, setProfileData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [rating, setRating] = useState<any>(0);
  useEffect(() => {
    const fetchLeetCodeProfile = async () => {
      try {
        const response = await fetch(
          `https://alfa-leetcode-api.onrender.com/userProfile/kviraj722`
        );
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

    fetchLeetCodeProfile();
  }, []);

  useEffect(() => {
    const fetchLeetCodeProfileContestRating = async () => {
      try {
        const response = await fetch(
          `https://alfa-leetcode-api.onrender.com/kviraj722/contest`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRating(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeProfileContestRating();
  }, []);

  return (
    <div className="bg-black text-white shadow-md rounded-md overflow-hidden w-full sm:w-1/2 lg:w-1/3 max-w-sm m-4">
      {loading && <p className="p-4">Loading...</p>}
      {error && <p className="p-4">Error: {error}</p>}
      {profileData && (
        <div className="p-4">
          <div className="flex gap-2 mb-5">
            <ZapIcon />
            <p>Leetcode</p>
          </div>
          <h2 className="text-2xl font-bold mb-2">Kviraj722</h2>
          <p>Total Questions Solved: {profileData.totalSolved}</p>
          <div className="mt-5 mb-5 flex justify-evenly">
            <p className="border-1 shadow-blurred-border rounded-full p-2 ">
              <span className="text-green-400">Easy:</span>{" "}
              {profileData.easySolved}
            </p>
            <p className="border-1 shadow-blurred-border rounded-full p-2 ">
              <span className="text-orange-400">Medium</span>:{" "}
              {profileData.mediumSolved}
            </p>
            <p className="border-1 shadow-blurred-border rounded-full p-2 ">
              <span className="text-red-500">Hard</span>:{" "}
              {profileData.hardSolved}
            </p>
          </div>
          <p className="mt-5 mb-5">Contest Rating: {rating?.contestRating}</p>
          <Link
            href={`https://leetcode.com/kviraj722`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default LeetCodeProfile;
