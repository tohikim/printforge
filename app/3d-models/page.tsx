import { getAllModels } from "../lib/models";
import { Model } from "../types";
import ModelsGrid from "./components/ModelsGrid";

export default async function ModelsPage() {
  // const { search } = await searchParams;
  const models: Model[] = await getAllModels();
  return (
    <ModelsGrid
      models={models}
      title="All Models"
      // searchParams={searchParams}
    />
  );
}
