import Link from "next/link";
import type { Post } from "../types";
import type { JSX } from "react";

export default async function PostsPage(): Promise<JSX.Element> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="posts-container">
      <h1>Blog Posts</h1>
      <ul className="posts-list">
        {posts.map(
          (post: Post): JSX.Element => (
            <li key={post.id} className="post-item">
              <Link href={`/posts/${post.id}`}>
                <h2 className="font-bold text-xl border-2 border-gray-400">
                  {post.title}
                </h2>
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
