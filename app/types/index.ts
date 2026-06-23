import { StaticImageData } from "next/image";

export type RootLayoutProps = Readonly<{
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
