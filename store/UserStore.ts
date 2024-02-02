import axios from "axios";
import create from "zustand";

type UserState = {
  bookmarkPrograms: Program[];
  getBookmarkPrograms: () => void;
  bookmarkShortcuts: Shortcut[];
  getBookmarkShortcuts: () => void;
  userProfile: Profile;
};

export const useUserStore = create<UserState>((set, get) => ({
  bookmarkPrograms: [],
  getBookmarkPrograms: async () => {},
  bookmarkShortcuts: [],
  getBookmarkShortcuts: async () => {},

  userProfile: {
    nickname: "",
    email: "",
    postCount: 0,
    commentCount: 0,
    likeCount: 0,
  },
}));
