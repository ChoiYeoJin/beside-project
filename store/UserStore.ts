import axios from "axios";
import { create } from "zustand";

type UserState = {
  showAlarm: boolean;
  setAlarm: (value: boolean) => void;
  bookmarkPrograms: Program[];
  getBookmarkPrograms: () => void;
  bookmarkShortcuts: Shortcut[];
  getBookmarkShortcuts: () => void;
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

  userProfile: {
    nickname: "",
    email: "",
    postCount: 0,
    commentCount: 0,
    likeCount: 0,
  },
}));
