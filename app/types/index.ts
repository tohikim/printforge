import { StaticImageData } from "next/image";

export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type ModelsLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type StatsType = {
  icon: StaticImageData;
  title: string;
  description: string;
};

export type Model = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Category = {
  displayName: string;
  slug: string;
};

export type ModelDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export type CategoryPageProps = {
  params: Promise<{
    slug: string;
    models: Model[];
  }>;
};

export type NavPillProps = {
  name: string;
  path: string;
  condition?: boolean;
};

export type ModelsGridProps = {
  models: Model[];
  title?: string;
};

export type CategoryNavPillProps = {
  url: string;
  name: string;
  condition?: boolean;
};
