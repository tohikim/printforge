import { ModelsLayoutProps } from "../types";
import CategoryNav from "./components/CategoryNav";

export default function ModelsLayout({ children }: ModelsLayoutProps) {
  return (
    <div className="flex flex-col md:flex-row">
      <CategoryNav />
      {children}
    </div>
  );
}
