import { CategoryPageProps, Model } from "@/app/types";
import ModelsGrid from "../../components/ModelsGrid";
import { getAllModels } from "@/app/lib/models";
export default async function CategoryPage({
  params,
}: CategoryPageProps): Promise<JSX.Element> {
  const { slug } = await params;
  const models: Model[] = await getAllModels();
  const filteredModels = models.filter(
    (model: Model) => model.category === slug,
  );
  return <ModelsGrid models={filteredModels} />;
}
