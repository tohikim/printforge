import { Model } from "@/app/types";
import Link from "next/link";
import ModelCard from "./ModelCards";

export default function ModelsGrid({
  models,
  title,
}: {
  models: Model[];
  title?: string;
}) {
  return (
    <div className="flex flex-col justify-center text-left p-7 md:p-10 gap-5">
      {!!title && (
        <div className="hidden md:block">
          <h1 className="text-2xl font-bold pl-2">{title}</h1>
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
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
