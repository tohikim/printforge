import { Model } from "@/app/types";
import Image from "next/image";
import type { JSX } from "react";
import hero from "../../../public/hero-image 1.png";
import Likes from "./Likes";

export default function ModelCard({ model }: { model: Model }): JSX.Element {
  return (
    <div className="flex flex-col text-left xl:h-125 lg:h-118 md:h-106 border border-gray-300 rounded-[10px] hover:shadow-[0_5px_12px_rgba(0,0,0,0.1)] hover:-translate-y-0.75 transition-all">
      <Image
        src={hero}
        alt="Model card image"
        className="rounded-tr-[9px] rounded-tl-[9px]"
      />
      <div className="flex flex-col justify-between p-3 h-full gap-3">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-bold">{model.name}</h1>
          <p className="text-[1rem] leading-4 font-light">
            {model.description}
          </p>
          <p className="border border-gray-400 text-gray-500  rounded-[50px] font-light w-fit px-2 text-[0.8rem]">
            {model.category}
          </p>
        </div>
        <Likes model={model} />
      </div>
    </div>
  );
}
