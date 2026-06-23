import { getAllModels } from "../lib/models";
import { Model } from "../types";

export default async function ModelsPage() {
  const models: Model[] = await getAllModels();
  return (
    <div>
      {models.map((model: Model) => (
        <div key={model.id}>
          <p>{model.name}</p>
        </div>
      ))}
    </div>
  );
}
