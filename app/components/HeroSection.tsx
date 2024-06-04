"use client";
import React from "react";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";
import ProfilePhoto from "@/public/PorfilePhoto.jpg";
import Linkdeln from "@/public/Linkdeln.png";
import Github from "@/public/github.png";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";

type Props = {};

const HeroSection = () => {
  const sent =
    "I specialize in delivering innovative and efficient solutions that enhance user experiences, streamline operations, and drive business success. My expertise lies in creating scalable applications that are both reliable and robust, ensuring seamless integration, optimal performance, and future-ready capabilities for diverse business needs.";
  const words = ["Full stack", "Software", "Frontend", "Backend"];
  const socialLinks = [
    {
      id: 1,
      name: "Linkdeln",
      icon: Linkdeln,
      url: "https://www.linkedin.com/in/kawa-viraj-551024205/",
    },
    {
      id: 2,
      name: "Github",
      icon: Github,
      url: "https://www.github.com/kviraj722",
    },
    {
      id: 2,
      name: "Github",
      icon: Github,
      url: "https://www.github.com/kviraj722",
    },
  ];
  return (
    <div className="container mt-10 mb-10 bg-stone-950  rounded-3xl p-2 flex gap-5 flex-col justify-center items-center">
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

      {/* <div className="m-4">
        <TextGenerateEffect words={sent} />
      </div> */}

      <div className="flex gap-4 items-center justify-center w-96">
        {socialLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            <Image src={link.icon} alt={link.name} width={30} height={30} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
