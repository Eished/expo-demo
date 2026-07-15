// src/store/useAuthStore.ts
import { mmkvStorage } from '@/libs/mmkv';
import { UserType } from '@/types';
import { create, ExtractState } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type AuthState = {
  user: UserType | null;
  token: string | null;
  setAuth: (user: UserType, token: string) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      user: null,
      token: null,
      setAuth: (user, token) => set({ user, token }),
      clearAuth: () => set({ user: null, token: null }),
    }),
    {
      name: 'auth-storage', // MMKV 中的 key
      storage: createJSONStorage(() => mmkvStorage), // 使用 MMKV 替代 AsyncStorage
    },
  ),
);

export type IAuthState = ExtractState<typeof useAuthStore>;
