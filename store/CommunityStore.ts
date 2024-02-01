// src/stores/footerStore.ts
import axios from "axios";
import create from "zustand";

// 상태 타입 정의
type CommunityState = {
  postList: Post[];
  getPostList: () => void;
  getPostCategoryList: (category: string) => void;
  getPostProgramList: (program: string) => void;
};

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

// 상태와 액션을 포함하는 스토어 생성
export const useCommunityStore = create<CommunityState>((set) => ({
  postList: [],
  getPostList: async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/community/posts`);
      set({ postList: response.data });
    } catch (error) {
      console.log(error);
    }
  },
  getPostCategoryList: async (category: string) => {
    try {
      const response = await axios.get(
        `${SERVER_URL}/community/posts/category?=${category}`
      );
      set({ postList: response.data });
    } catch (error) {
      console.log(error);
    }
  },
  getPostProgramList: async (program: string) => {
    try {
      const response = await axios.get(`${SERVER_URL}/community/posts`);
      set({ postList: response.data });
    } catch (error) {
      console.log(error);
    }
  },
}));
