import Link from "next/link";

export default function NavPill({
  name,
  path,
  condition,
}: {
  name: string;
  path: string;
  condition?: boolean;
}): JSX.Element {
  return (
    <li className="hover:-translate-y-0.75 transition-all">
      <Link
        href={path}
        className={`py-2 hover:text-[#F77429] hover:border-b-2 hover:border-b-[#F77429] ${
          condition ? "border-b-2 border-b-[#F77429] text-[#F77429]" : ""
        }`}
      >
        {name}
      </Link>
    </li>
  );
}
