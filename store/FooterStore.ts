// src/stores/footerStore.ts
import create from "zustand";

// 상태 타입 정의
type FooterState = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

// 상태와 액션을 포함하는 스토어 생성
export const useFooterStore = create<FooterState>((set) => ({
  activeTab: "home", // 초기 상태 값
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
