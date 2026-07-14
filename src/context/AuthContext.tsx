// src/context/AuthContext.tsx
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// 定义 Context
const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  // 核心：是否正在初始化（读取本地存储的用户信息）
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模拟应用启动时检查本地缓存的登录态（AsyncStorage 等）
    const checkAuthStatus = async () => {
      try {
        // 假设这里去拿 Token
        // const token = await AsyncStorage.getItem('userToken');
        const token = null; // 模拟未登录

        if (token) {
          setUser({ name: '张三' });
        }
      } finally {
        // 无论成功还是失败，都要把加载状态关掉
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  return <AuthContext.Provider value={{ user, setUser, isLoading }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
