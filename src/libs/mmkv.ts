// src/store/mmkv.ts
import { createMMKV } from 'react-native-mmkv';
import { StateStorage } from 'zustand/middleware';

// 1. 使用 createMMKV() 创建实例
const storage = createMMKV();

export const mmkvStorage: StateStorage = {
  setItem: (key: string, value: string) => storage.set(key, value),
  getItem: (key: string) => {
    const value = storage.getString(key);
    return value === undefined ? null : value; // v4 获取不到时返回 undefined
  },
  removeItem: (key: string) => storage.remove(key), // 注意：v4 中 delete 变为了 remove
};
