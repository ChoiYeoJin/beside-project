"use client";
import { useCommunityStore } from "@/store/CommunityStore";

export default function PostList() {
  const postList = useCommunityStore((state) => state.postList);

  return (
    <>
      {postList.map((post: Post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </>
  );
}
