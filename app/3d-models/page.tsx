import { getAllModels } from "../lib/models";
import { Model } from "../types";
import ModelCard from "./components/ModelCards";
import Link from "next/link";

export default async function ModelsPage() {
  const models: Model[] = await getAllModels();
  const pageTitle = "3D Models";
  return (
    <div className="flex flex-col justify-center text-left p-7 md:p-10 gap-5">
      <div className="hidden md:block">
        <h1 className="text-2xl font-bold pl-2">{pageTitle}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {models.map((model: Model) => (
          <div key={model.id} className="py-4 md:p-2">
            <Link href={`/3d-models/${model.id}`}>
              <ModelCard model={model} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
