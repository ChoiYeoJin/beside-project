// src/stores/footerStore.ts
import axios from "axios";
import create from "zustand";

// 상태 타입 정의
type CommunityState = {
  postList: Post[];
  category: string;
  program: string;
  getPostList: () => void;
  getPostCategoryList: () => void;
  getPostProgramList: () => void;
  setCategory: (category: string) => void;
  setProgram: (program: string) => void;
};

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

// 상태와 액션을 포함하는 스토어 생성
export const useCommunityStore = create<CommunityState>((set, get) => ({
  postList: [],
  category: "",
  program: "",
  getPostList: async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/community/posts`, {
        headers: {
          Authorization: `Bearer token`,
        },
      });
      set({ postList: response.data });
    } catch (error) {
      console.log(error);
    }
  },
  getPostCategoryList: async () => {
    const category = get().category;
    try {
      const response = await axios.get(
        `${SERVER_URL}/community/posts/category?=${category}`,
        {
          headers: {
            Authorization: `Bearer token`,
          },
        }
      );
      set({ postList: response.data });
    } catch (error) {
      console.log(error);
    }
  },
  getPostProgramList: async () => {
    try {
      const response = await axios.get(
        `${SERVER_URL}/community/posts/platform=${get().program}`,
        {
          headers: {
            Authorization: `Bearer token`,
          },
        }
      );
      set({ postList: response.data });
    } catch (error) {
      console.log(error);
    }
  },
  setCategory: (category: string) => set({ category }),
  setProgram: (program: string) => set({ program }),
}));
