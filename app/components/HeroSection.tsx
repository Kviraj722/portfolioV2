"use client";
import React from "react";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";
import ProfilePhoto from "@/public/PorfilePhoto.jpg";
import { TextGenerateEffect } from "./ui/text-generate-effect";

type Props = {};

const HeroSection = () => {
  const sent =
    "I specialize in delivering innovative and efficient solutions that enhance user experiences, streamline operations, and drive business success. My expertise lies in creating scalable applications that are both reliable and robust, ensuring seamless integration, optimal performance, and future-ready capabilities for diverse business needs.";
  const words = ["Full stack", "Software", "Frontend", "Backend"];
  return (
    <div className="flex gap-2 flex-wrap md:items-center sm:items-center md:justify-center sm:justify-center">
      <div className="flex flex-col justify-center items-center gap-5 ">
        <Image
          src={ProfilePhoto}
          alt="profile image"
          fetchPriority="high"
          width={300}
          className="border-blue-500 border rounded-full mt-5 h-60 w-60"
        />
        <div>
          <FlipWords words={words} className="font-extrabold" />
          developer
        </div>
      </div>

      <div className=" items-center flex flex-col gap-2">
        <TextGenerateEffect words={sent} />
      </div>
    </div>
  );
};

export default HeroSection;
