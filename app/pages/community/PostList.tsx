"use client";
import CommunityCard from "@/app/components/CommunityCard";
import { useCommunityStore } from "@/store/CommunityStore";
import Link from "next/link";

export default function PostList() {
  const postList = useCommunityStore((state) => state.postList);

  return (
    <>
      {postList.map((post: Post) => (
        <div key={post.id}>
          <Link href={`../community/post/${post.id}`}>
            <CommunityCard
              userName={post.author}
              createdAt={post.updated_at}
              imgSrc="/icons/cat.png"
              mainText={post.content}
              isMain={true}
            />
          </Link>
        </div>
      ))}
    </>
  );
}
