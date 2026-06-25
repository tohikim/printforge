import { Model, ModelsGridProps } from "@/app/types";
import Link from "next/link";
import ModelCard from "./ModelCards";
import SearchBar from "./SearchBar";

export default function ModelsGrid({ models, title }: ModelsGridProps) {
  return (
    <div className="flex flex-col justify-center text-left px-7 md:px-10 gap-5">
      {!!title && (
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="hidden md:block">
            <h1 className="text-2xl font-bold pl-2">{title}</h1>
          </div>
          <SearchBar />
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
