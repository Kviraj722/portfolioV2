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
    <div className="flex gap-2 flex-wrap justify-center">
      <div className="items-center flex flex-col gap-5 ">
        <Image
          src={ProfilePhoto}
          alt="profile image"
          fetchPriority="high"
          width={300}
          className="border-blue-500 border rounded-full mt-5 h-60 w-60"
        />
        <div className="flex">
          <FlipWords words={words} className="font-extrabold" />
          <p className="">developer. </p>
        </div>
      </div>

      <TextGenerateEffect words={sent} />
    </div>
  );
};

export default HeroSection;
