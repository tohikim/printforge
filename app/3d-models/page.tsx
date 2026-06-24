import { getAllModels } from "../lib/models";
import { Model } from "../types";
import ModelsGrid from "./components/ModelsGrid";

export default async function ModelsPage() {
  const models: Model[] = await getAllModels();
  return <ModelsGrid models={models} title="All Models" />;
}
