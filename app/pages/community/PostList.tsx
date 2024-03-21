import CommunityCard from "@/app/components/CommunityCard";
import { useCommunityStore } from "@/store/CommunityStore";
import FormatDate from "@/utils/date";
import { fetchData } from "@/utils/fetch";
import Link from "next/link";

// fetchData 함수나 비슷한 함수를 사용하여 서버에서 데이터를 가져옵니다.
async function getPosts() {
  const posts = await fetchData<Post[]>("/community/posts");
  return posts;
}

export default async function PostList() {
  //const postList = await getPosts();

  return (
    <>
      {/* {postList.map((post) => (
        <div key={post.id}>
          <Link href={`../community/post/${post.id}`}>
            <CommunityCard
              userName={post.author}
              createdAt={FormatDate(post.updated_at)}
              imgSrc="/icons/User-30.svg"
              mainText={post.content}
              isMain={true}
            />
          </Link>
        </div>
      ))} */}
    </>
  );
}
