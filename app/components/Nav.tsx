import type { JSX } from "react";
import logoMobile from "../../public/logoMobile.png";
import logoPC from "../../public/logoPC.png";
import { navContent } from "../constants/homeContent";
import Image from "next/image";
import Link from "next/link";

export default function Nav(): JSX.Element {
  return (
    <nav className="flex flex-row justify-between items-center w-full p-5">
      <Link href="/">
        <div className="block md:hidden">
          <Image src={logoMobile} height={40} alt="Logo mobile" />
        </div>
        <div className="hidden md:block">
          <Image src={logoPC} height={40} alt="Logo mobile" />
        </div>
      </Link>
      <ul className="flex flex-row gap-5 justify-around max-w-[50%]">
        <li className="hover:-translate-y-0.75 transition-all">
          <Link
            href="/3d-models"
            className="py-2 hover:text-[#F77429] focus:text-[#F77429] hover:border-b-2 hover:border-b-[#F77429] active:text-[#F77429] focus:border-b-2 focus:border-b-[#F77429]"
          >
            {navContent.nav1}
          </Link>
        </li>
        <li className="hover:-translate-y-0.75 transition-all">
          <Link
            href="/about"
            className="py-2 hover:text-[#F77429] focus:text-[#F77429] hover:border-b-2 hover:border-b-[#F77429] active:text-[#F77429] focus:border-b-2 focus:border-b-[#F77429]"
          >
            {navContent.nav2}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
