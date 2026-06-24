import Link from "next/link";

export default function CategoryNavPill({
  url,
  name,
  condition,
}: {
  url: string;
  name: string;
  condition?: boolean;
}): JSX.Element {
  return (
    <div className="hover:-translate-y-0.75 transition-all">
      <Link
        href={url}
        className={`hover:text-[#F77429] ${condition ? "text-[#F77429]" : ""}`}
      >
        <p className=" block w-fit whitespace-nowrap">{name.toUpperCase()}</p>
      </Link>
    </div>
  );
}
