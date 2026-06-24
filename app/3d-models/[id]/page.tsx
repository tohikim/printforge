import { getModelById } from "@/app/lib/models";
import { Model } from "@/app/types";
import type { JSX } from "react";
import hero from "../../../public/hero-image 1.png";
import Image from "next/image";
import { format } from "date-fns";
import BackToModels from "../components/BackToModels";
import Likes from "../components/Likes";

export default async function ModelDetailPage({
  params,
}: {
  params: Promise<Model>;
}): Promise<JSX.Element> {
  const { id } = await params;
  const res = await getModelById(id);

  const formattedDate = format(res.dateAdded, "MM/dd/yyyy");
  const backToModelsButton = `Added on ${formattedDate}`;

  return (
    <div className="flex flex-col md:flex-row md:w-screen md:justify-around h-full md:h-auto gap-5 md:gap-10 p-7 md:p-10">
      <div className="block md:hidden hover:-translate-y-0.75 transition-all">
        <BackToModels />
      </div>

      <div className="w-full md:min-w-[60%] md:max-w-[60%] h-fit">
        <Image src={hero} alt="Model image" />
      </div>
      <div className="flex flex-col h-full md:h-auto w-full justify-between">
        <div className="hidden md:block hover:-translate-y-0.75 transition-all">
          <BackToModels />
        </div>
        <div className="flex flex-col h-full md:w-full md:justify-center">
          <div className="flex flex-col gap-3">
            <Likes model={res} />
            <h1 className="text-3xl font-bold">{res.name}</h1>
            <p className="border border-gray-400 text-gray-500 rounded-[50px] w-fit px-2">
              {res.category}
            </p>
            <p className="text-xl mb-5 font-light">{res.description}</p>
            <p className="hidden md:block">{backToModelsButton}</p>
          </div>
        </div>
        <div className="flex flex-col md:hidden pb-10">
          <p>{backToModelsButton}</p>
        </div>
      </div>
    </div>
  );
}
