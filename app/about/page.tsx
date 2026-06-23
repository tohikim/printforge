import Stats from "./components/Stats";
import type { JSX } from "react";
import { aboutHeader, aboutVision, stats } from "./constants/aboutContent";
import Image from "next/image";
import headerImage from "../../public/hero-image 1.png";
import footerImage from "../../public/aboutFooter.png";
import { StatsType } from "../types";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-screen h-fit p-6 pb-20 md:p-10 justify-center items-center gap-10">
      <div className="flex flex-col md:flex-row md:justify-around gap-10">
        <div className="block w-full h-fit md:min-w-[45%] md:w-[45%]">
          <Image src={headerImage} alt="Header Image" />
        </div>
        <div className="flex flex-col text-left justify-center gap-5 md:max-w-[45%]">
          <p>{aboutHeader.tag}</p>
          <h1 className="text-5xl font-bold">{aboutHeader.title}</h1>
          <p className="text-2xl">{aboutHeader.des1}</p>
          <p className="text-2xl">{aboutHeader.des2}</p>
        </div>
      </div>
      <div className="w-full h-px bg-gray-200" />
      <div className="flex flex-col md:flex-row md:justify-evenly gap-7 text-left">
        {stats.map((stat: StatsType, index: number): JSX.Element => {
          return (
            <div
              key={index}
              className="flex flex-row justfy-center md:gap-3 py-4 md:py-8"
            >
              <div>
                <Stats
                  icon={stat.icon}
                  title={stat.title}
                  description={stat.description}
                />
              </div>
              {index !== 2 && (
                <div className="md:h-full md:w-px md:bg-gray-400" />
              )}
            </div>
          );
        })}
      </div>
      <div className="w-full h-px bg-gray-200" />
      <div className="flex flex-col md:max-w-[45%] text-left gap-10">
        <h1 className="text-5xl font-bold">{aboutVision.title}</h1>
        <p className="text-2xl">{aboutVision.par1}</p>
        <div className="self-center w-[75%] md:w-[30%] h-px bg-gray-400 " />
        <p className="text-2xl">{aboutVision.par2}</p>
      </div>
      <div className="hidden md:block">
        <Image
          src={footerImage}
          width={120}
          height={120}
          alt="About footer image"
          className="my-10"
        />
      </div>
    </div>
  );
}
