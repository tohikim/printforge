import cover from "../public/home-image.png";
import Image from "next/image";
import { homeContent } from "./constants/homeContent";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row md:justify-around h-full items-center gap-20 p-7 md:p-10">
      <div className="flex flex-col h-full gap-5 justify-center items-left md:max-w-[38%]">
        <div className="hidden md:block">
          <p>{homeContent.tag}</p>
        </div>
        <h1 className="font-bold text-5xl">{homeContent.title}</h1>
        <p className="text-2xl">{homeContent.description}</p>
        <Link
          href="/3d-models"
          className="hover:-translate-y-0.75 transition-all"
        >
          <button className="cursor-pointer mt-7 text-xl border-2 border-black hover:border-[#F77429] focus:border-[#F77429] hover:text-[#F77429] focus:text-[#F77429] w-fit px-5 py-2 bg-white opacity-100">
            {homeContent.button}
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center h-fit md:max-w-[40%]">
        <Image src={cover} alt="cover image" className="mb-10 md:mb-0" />
      </div>
    </div>
  );
}
