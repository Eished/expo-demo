// app/_layout.tsx
import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

SplashScreen.preventAutoHideAsync();
// 抽取一个内部组件，因为我们需要使用 router 和 useAuth hooks
// Hooks 必须在 Provider 内部使用
function RootLayoutNav() {
  const { user, isLoading } = useAuth();

  return (
    <>
      <AnimatedSplashOverlay />

      <Stack>
        <Stack.Protected guard={user}>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          {/* 注册商品详情页 */}
          <Stack.Screen
            name='product/[id]'
            options={{
              // 可以在这里设置通用的头部样式，或者隐藏头部在页面内自定义
              title: '商品详情',
              headerBackTitle: '返回',
            }}
          />
          <Stack.Screen
            name='product/[id]/comments'
            options={{
              title: '商品评价',
              headerBackTitle: '返回',
            }}
          />
          <Stack.Screen
            name='profile'
            options={{
              title: 'Profile',
              headerBackTitle: '返回',
            }}
          />
        </Stack.Protected>

        <Stack.Protected guard={!user}>
          <Stack.Screen name='login' options={{ title: '登录', headerShown: false }} />
        </Stack.Protected>
      </Stack>
    </>
  );
}

// 默认导出，将 Provider 包裹在最外层
export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootLayoutNav />
      </ThemeProvider>
    </AuthProvider>
  );
}
