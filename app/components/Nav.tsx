"use client";

import type { JSX } from "react";
import logoMobile from "../../public/logoMobile.png";
import logoPC from "../../public/logoPC.png";
import { navContent } from "../constants/homeContent";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavPill from "./NavPill";

export default function Nav(): JSX.Element {
  const pathname = usePathname();

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
        <NavPill
          name={navContent.nav1}
          path="/3d-models"
          condition={pathname === "/3d-models"}
        />
        <NavPill
          name={navContent.nav2}
          path="/about"
          condition={pathname === "/about"}
        />
      </ul>
    </nav>
  );
}
