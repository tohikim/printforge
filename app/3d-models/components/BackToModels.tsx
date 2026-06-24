import Link from "next/link";
import { CiSquareChevLeft } from "react-icons/ci";

export default function BackToModels(): JSX.Element {
  const buttonName = "BACK TO OVERVIEW";

  return (
    <Link href="/3d-models">
      <div className="flex flex-row gap-2 items-center-justify-center text-gray-400  hover:text-[#F77429] active:text-[#F77429]">
        <CiSquareChevLeft className="w-5.5 h-5.5" />
        <p className="cursor-pointer text-center  text-[1rem] p-0 m-0 ">
          {buttonName}
        </p>
      </div>
    </Link>
  );
}
