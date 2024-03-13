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
  updateBookmarkShortcuts: (platform: string, id: string) => void;
  updateBookmarkPrograms: (platform: string, id: string) => void;
  removeBookmarkShortcuts: (platform: string, id: string) => void;
  removeBookmarkPrograms: (platform: string, id: string) => void;

  getUserProfile: () => void;
  userProfile: Profile;
};

export const useUserStore = create<UserState>((set, get) => ({
  showAlarm: false,
  bookmarkPrograms: [],
  getBookmarkPrograms: async () => {
    try {
      const response = await axios.get(
        `${SERVER_URL}/shortcut-keys/bookmark/program/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      set({ bookmarkPrograms: [...response.data] });
    } catch (error) {
      console.error(error);
    }
  },
  bookmarkShortcuts: [],
  getBookmarkShortcuts: async () => {
    try {
      const response = await axios.get(
        `${SERVER_URL}/shortcut-keys/bookmark/shortcut/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      set({ bookmarkShortcuts: [...response.data] });
    } catch (error) {
      console.error(error);
    }
  },
  setAlarm: (value: boolean) => {
    set({ showAlarm: value });
  },
  getUserProfile: async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/mypage/token`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      const profile = response.data.user;

      set({ userProfile: profile });
    } catch (error) {
      console.error(error);
    }
  },
  updateBookmarkPrograms: async (platform: string, id: string) => {
    try {
      const response = await axios.post(
        `${SERVER_URL}/shortcut-keys/bookmark/program/?platform=${platform}&program_id=${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  },
  updateBookmarkShortcuts: async (platform: string, id: string) => {
    try {
      const response = await axios.post(
        `${SERVER_URL}/shortcut-keys/bookmark/shortcut/?platform=${platform}&shortcut_id=${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  },
  removeBookmarkPrograms: async (platform: string, id: string) => {
    try {
      const response = await axios.delete(
        `${SERVER_URL}/shortcut-keys/bookmark/program/?platform=${platform}&program_id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  },
  removeBookmarkShortcuts: async (platform: string, id: string) => {
    try {
      const response = await axios.delete(
        `${SERVER_URL}/shortcut-keys/bookmark/shortcut/?platform=${platform}&shortcut_id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  },
  userProfile: {
    nickname: "",
    username: "",
    postCount: 0,
    commentCount: 0,
    likeCount: 0,
  },
}));
