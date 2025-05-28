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

  if (!loading && error) {
    return null;
  }

  return (
    <div className="modern-card p-6 flex flex-col justify-between min-h-[340px]">
      {loading && <p className="p-4">Loading...</p>}
      {profileData && (
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 mb-3">
            <ZapIcon className="text-yellow-400" />
            <h2 className="text-2xl font-bold gradient-text">LeetCode</h2>
          </div>
          <p className="text-gray-400 mb-1">@kviraj722</p>
          <p className="mb-2 text-gray-300">Total Solved: <span className="font-semibold text-blue-400">{profileData.totalSolved}</span></p>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="rounded-lg bg-gray-900/60 p-2 text-center">
              <span className="text-green-400 font-semibold">Easy</span>
              <div>{profileData.easySolved}</div>
            </div>
            <div className="rounded-lg bg-gray-900/60 p-2 text-center">
              <span className="text-orange-400 font-semibold">Medium</span>
              <div>{profileData.mediumSolved}</div>
            </div>
            <div className="rounded-lg bg-gray-900/60 p-2 text-center">
              <span className="text-red-500 font-semibold">Hard</span>
              <div>{profileData.hardSolved}</div>
            </div>
          </div>
          <p className="mb-4 text-gray-300">Contest Rating: <span className="font-semibold text-purple-400">{rating?.contestRating}</span></p>
          <Link
            href={`https://leetcode.com/kviraj722`}
            target="_blank"
            rel="noopener noreferrer"
            className="modern-button w-full text-center mt-auto"
          >
            View LeetCode Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default LeetCodeProfile;
