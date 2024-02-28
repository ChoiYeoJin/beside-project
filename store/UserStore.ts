import axios from "axios";
import { create } from "zustand";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URI;
type UserState = {
  showAlarm: boolean;
  setAlarm: (value: boolean) => void;
  bookmarkPrograms: Program[];
  getBookmarkPrograms: () => void;
  bookmarkShortcuts: Shortcut[];
  getBookmarkShortcuts: () => void;
  updateBookmarkShortcuts: () => void;
  updateBookmarkPrograms: () => void;
  getUserProfile: () => void;
  userProfile: Profile;
};

export const useUserStore = create<UserState>((set, get) => ({
  showAlarm: false,
  bookmarkPrograms: [],
  getBookmarkPrograms: async () => {},
  bookmarkShortcuts: [],
  getBookmarkShortcuts: async () => {},
  setAlarm: (value: boolean) => {
    set({ showAlarm: value });
  },
  getUserProfile: async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/mypage/token`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });

      alert(response.data);
    } catch (error) {
      console.error(error);
    }
  },
  updateBookmarkPrograms: async () => {},
  updateBookmarkShortcuts: async () => {},
  userProfile: {
    nickname: "",
    email: "",
    postCount: 0,
    commentCount: 0,
    likeCount: 0,
  },
}));
