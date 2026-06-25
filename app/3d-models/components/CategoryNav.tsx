"use client";

import { getAllCategories } from "@/app/lib/categories";
import { Category } from "@/app/types";
import { usePathname } from "next/navigation";
import CategoryNavPill from "./CategoryNavPill";

export default function CategoryNav() {
  const categories = getAllCategories();
  const pathname = usePathname();
  const pathAll = "/3d-models";

  const all = "All";
  return (
    <div className="sticky top-0 bg-white align-start h-fit md:overflow-y-auto overflow-x-auto scrollbar-hide md:h-screen flex flex-row md:flex-col items-start md:justify-center gap-7 py-4 px-10 md:min-w-50">
      <CategoryNavPill
        url={pathAll}
        name={all}
        condition={pathname === pathAll}
      />
      {categories.map(({ displayName, slug }: Category): JSX.Element => {
        const url = `/3d-models/categories/${slug}`;
        return (
          <CategoryNavPill
            url={url}
            name={displayName}
            key={slug}
            condition={pathname === url}
          />
        );
      })}
    </div>
  );
}
