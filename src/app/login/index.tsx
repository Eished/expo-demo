// app/login.tsx
import { useAuthStore } from '@/stores/auth/authStore';
import { Button, Text, View } from 'react-native';

export default function LoginScreen() {
  const setAuth = useAuthStore(state => state.setAuth);

  const handleLogin = () => {
    // 模拟 API 登录成功
    setAuth(
      {
        name: '张三',
        uid: 'uid123',
        avatar: null,
        email: 'a@mail.com',
      },
      'token123',
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>请先登录</Text>
      <Button title='点我登录' onPress={handleLogin} />
    </View>
  );
}
