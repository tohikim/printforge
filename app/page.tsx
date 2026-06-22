import cover from "../public/home-image.png";
import Image from "next/image";
import { homeContent } from "./constants/homeContent";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 justify-around align-center w-screen h-screen p-7 md:p-10">
      <Nav />
      <div className="flex flex-col md:flex-row md:justify-around items-center gap-20 h-full">
        <div className="flex flex-col gap-5 justify-center items-left md:max-w-[38%] ">
          <div className="hidden md:block">
            <p>{homeContent.tag}</p>
          </div>
          <h1 className="font-bold text-4xl">{homeContent.title}</h1>
          <p className="text-xl">{homeContent.description}</p>
          {/* @todo add onClick logic later*/}
          <button className="mt-7 text-xl border-2 border-black w-fit px-5 py-2 bg-white opacity-100">
            {homeContent.button}
          </button>
        </div>
        <div className="flex justify-center items-center md:h-fit md:max-w-[40%]">
          <Image src={cover} alt="cover image" />
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
