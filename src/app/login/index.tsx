// app/login.tsx
import { useAuth } from '@/context/AuthContext';
import { Button, Text, View } from 'react-native';

export default function LoginScreen() {
  const { setUser } = useAuth();

  const handleLogin = () => {
    // 模拟 API 登录成功
    setUser({ name: '张三' });
    // 注意：这里不需要手动写 router.replace('/')
    // 状态更新后，RootLayout 里的 useEffect 会自动接管路由跳转！
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>请先登录</Text>
      <Button title='点我登录' onPress={handleLogin} />
    </View>
  );
}
