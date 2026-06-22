import type { JSX } from "react";
import logoMobile from "../../public/logoMobile.png";
import logoPC from "../../public/logoPC.png";
import { navContent } from "../constants/homeContent";
import Image from "next/image";

export default function Nav(): JSX.Element {
  return (
    <header className="flex flex-row justify-between items-center w-full md:mb-5">
      <div className="block md:hidden">
        <Image src={logoMobile} height={40} alt="Logo mobile" />
      </div>
      <div className="hidden md:block">
        <Image src={logoPC} height={40} alt="Logo PC" />
      </div>
      {/*@todo replace below with the nav componenet later */}
      <div className="flex flex-row gap-5 justify-around max-w-[50%]">
        <p>{navContent.nav1}</p>
        <p>{navContent.nav2}</p>
      </div>
    </header>
  );
}
