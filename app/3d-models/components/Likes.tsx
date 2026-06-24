import { Model } from "@/app/types";
import { CiHeart } from "react-icons/ci";

export default function Likes({ model }: { model: Model }): JSX.Element {
  return (
    <div className="flex flex-row gap-1 w-fit text-gray-500 items-center font-light text-xl cursor-pointer hover:-translate-y-0.75 transition-all">
      <CiHeart className="w-[28] h-[28] text-gray-500" />
      {model.likes}
    </div>
  );
}
