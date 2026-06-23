import { Post } from "@/app/types";
import type { JSX } from "react";

export default async function PostDetail({
  params,
}: {
  params: Promise<{ id: number }>;
}): Promise<JSX.Element> {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: Post = await res.json();

  return <h1>{post.title}</h1>;
}
