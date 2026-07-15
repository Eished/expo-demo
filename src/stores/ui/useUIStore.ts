// src/store/useUIStore.ts
import { create } from 'zustand';

type UIState = {
  isCartModalOpen: boolean;
  activeFilterId: string | null;
  toggleCartModal: (open?: boolean) => void;
  setActiveFilterId: (id: string | null) => void;
};

export const useUIStore = create<UIState>(set => ({
  isCartModalOpen: false,
  activeFilterId: null,
  toggleCartModal: open => set(state => ({ isCartModalOpen: open ?? !state.isCartModalOpen })),
  setActiveFilterId: id => set({ activeFilterId: id }),
}));
