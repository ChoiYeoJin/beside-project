import axios from "axios";
import { create } from "zustand";

type NoneUserStore = {
  programRankings: Program[];
  getProgramRankings: () => void;
  shortcutRankings: Shortcut[];
  getShortcutRankings: () => void;
  programs: Program[];
  getPrograms: () => void;
  shortcuts: Shortcut[];
  getShortcuts: (id: string) => void;
  search: string;
  setSearch: (search: string) => void;
  shortcutPopular: Shortcut[];
  getShortcutPopular: (id: string) => void;
};

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URI;

export const useNoneUserStore = create<NoneUserStore>((set, get) => ({
  programRankings: [],
  getProgramRankings: async () => {
    try {
      //alert(SERVER_URL);
      const response = await axios.get(`${SERVER_URL}/shortcut-keys/programs`);
      set({ programRankings: response.data });
    } catch (error) {
      console.error(error);
    }
  },
  shortcutRankings: [],
  getShortcutRankings: async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/shortcut-keys/allrank`);
      set({ shortcutRankings: response.data });
    } catch (error) {
      console.error(error);
    }
  },
  programs: [],
  getPrograms: async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/shortcut-keys/programs`);
      set({ programs: response.data });
    } catch (error) {
      console.error(error);
    }
  },
  shortcuts: [],
  getShortcuts: async (id: string) => {
    try {
      const response = await axios.get(
        `${SERVER_URL}/shortcut-keys/?platform=${id}`
      );
      set({ shortcuts: response.data });
    } catch (error) {
      console.error(error);
    }
  },
  search: "",
  setSearch: (search: string) => {
    set({ search: search });
  },
  shortcutPopular: [],
  getShortcutPopular: async (id: string) => {
    try {
      const response = await axios.get(
        `${SERVER_URL}/shortcut-keys/rank/?platform=${id}`
      );
      set({ shortcutPopular: response.data });
    } catch (error) {
      console.error(error);
    }
  },
}));
