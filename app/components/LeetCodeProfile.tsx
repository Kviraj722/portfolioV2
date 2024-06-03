"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
    <div className="max-w-sm mx-auto bg-black shadow-md rounded-md overflow-hidden">
      {profileData && (
        <>
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Kviraj722</h2>
            <p className=" mb-4">
              Total Questions Solved: {profileData.totalSolved}
            </p>
            <p className=" mb-2">Easy: {profileData.easySolved}</p>
            <p className=" mb-2">Medium: {profileData.mediumSolved}</p>
            <p className=" mb-4">Hard: {profileData.hardSolved}</p>
            <p className=" mb-4">Contest Rating: {rating?.contestRating}</p>
            <Link
              href={`https://leetcode.com/kviraj722`}
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

export default LeetCodeProfile;
