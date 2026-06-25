import { StatsType } from "@/app/types";
import Image from "next/image";
import type { JSX } from "react";

export default function Stats({
  icon,
  title,
  description,
}: StatsType): JSX.Element {
  return (
    <div className="flex flex-col gap-2 text-left">
      <div className="flex flex-row gap-2 justify-start items-center">
        <Image src={icon} height={40} width={40} alt="Stats card icon" />
        <h1 className="text-3xl md:text-2xl font-bold">{title}</h1>
      </div>
      <p className="text-xl md:text-[1rem]">{description}</p>
    </div>
  );
}
