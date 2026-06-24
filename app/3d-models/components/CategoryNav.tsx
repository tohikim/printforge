"use client";

import { getAllCategories } from "@/app/lib/categories";
import { Category } from "@/app/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoryNav() {
  const categories = getAllCategories();
  const pathname = usePathname();

  const all = "All";
  return (
    <div className="md:sticky md:top-0 align-start h-fit md:overflow-y-auto overflow-x-auto scrollbar-hide md:h-screen flex flex-row md:flex-col items-start md:justify-start gap-7 p-7 md:p- pb-0 md:min-w-50 ">
      <div className="hover:-translate-y-0.75 transition-all">
        <Link
          href="/3d-models"
          className={`hover:text-[#F77429] ${
            pathname === `/3d-models` ? "text-[#F77429]" : ""
          }`}
        >
          <p className="block whitespace-nowrap">{all.toUpperCase()}</p>
        </Link>
      </div>
      {categories.map((category: Category, index: number): JSX.Element => {
        const url = `/3d-models/categories/${category.slug}`;
        return (
          <div key={index} className="hover:-translate-y-0.75 transition-all">
            <Link
              href={url}
              className={`hover:text-[#F77429] ${
                pathname === url ? "text-[#F77429]" : ""
              }`}
            >
              <p className=" block w-fit whitespace-nowrap">
                {category.displayName.toUpperCase()}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
