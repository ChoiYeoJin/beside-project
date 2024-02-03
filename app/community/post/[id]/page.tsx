"use client";
import CommentCard from "@/app/components/CommentCard";
import CommunityCard from "@/app/components/CommunityCard";
import Header from "@/app/components/header/Header";
import MainContainer from "@/app/components/MainContainer";
import { useCommunityStore } from "@/store/CommunityStore";
import { useEffect, useState } from "react";

export default function Post({ params }: { params: { id: string } }) {
  const [commentValue, setCommentValue] = useState<string>("");
  const [isActive, setIsActive] = useState(false);
  const [post, setPost] = useState<Post>();

  const postList = useCommunityStore((state) => state.postList);
  const getPostList = useCommunityStore((state) => state.getPostList);
  const getPostCommentList = useCommunityStore(
    (state) => state.getPostCommentList
  );
  const postComments = useCommunityStore((state) => state.postComments);

  const handleComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentValue(event.target.value);
  };

  useEffect(() => {
    const fetchPost = async () => {
      await getPostList();
      const foundPost = postList.find(
        (postItem) => postItem.id.toString() === params.id.toString()
      );
      setPost(foundPost);
    };

    fetchPost();
  }, [getPostList, params.id]);

  useEffect(() => {
    if (post) {
      alert(post);
      getPostCommentList(post.id); // async와 await가 필요없습니다.
    }
  }, [post, getPostCommentList]);

  useEffect(() => {
    if (commentValue !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [commentValue]);

  return (
    <div>
      <Header isArrow={true} text={""} />
      {post && (
        <CommentCard
          userName={post.author}
          createdAt={post.updated_at}
          imgSrc="/icons/User-30.svg"
          mainText={post.content}
          isMain={true}
        />
      )}

      {postComments &&
        postComments.map((comment) => (
          <div key={comment.id}>
            <CommentCard
              userName={comment.author}
              createdAt={comment.created_at}
              imgSrc="/icons/User-30.svg"
              mainText={comment.content}
              isMain={true}
            />
          </div>
        ))}

      <div className="h-[120px] w-full absolute bottom-0 bg-white px-4 pt-5">
        <input
          type="text"
          value={commentValue}
          onChange={handleComment}
          className="w-full h-[49px] border border-black/10 rounded-[5px] pl-5 pr-14"
        />
        <div className="absolute right-[36px] top-[34px]">
          {isActive && <div className="text-primary">게시</div>}
          {!isActive && <div className="text-gray300">게시</div>}
        </div>
      </div>
    </div>
  );
}
