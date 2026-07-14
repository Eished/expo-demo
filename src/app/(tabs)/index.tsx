import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import ProductList from '@/components/product-list';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import MyDeviceModule from '@/modules/my-device-module/src/MyDeviceModule';

interface IProduct {
  id: string;
  name: string;
  price: string;
}

// 模拟商品数据
const PRODUCTS: IProduct[] = [
  { id: '101', name: '苹果 iPhone 15 Pro', price: '¥7999' },
  { id: '102', name: '索尼 WH-1000XM5 耳机', price: '¥2499' },
  { id: '103', name: '大疆 Mini 4 Pro 无人机', price: '¥4788' },
];

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon />
          <ThemedText type='title' style={styles.title}>
            Welcome to&nbsp;Expo
          </ThemedText>
        </ThemedView>

        <ThemedText type='code' style={styles.code}>
          get started
        </ThemedText>

        <ThemedText type='code' style={styles.code}>
          {MyDeviceModule.hello()}
        </ThemedText>

        <ProductList />

        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  cardContainer: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  card: { padding: 20, backgroundColor: 'white', marginBottom: 10, borderRadius: 8 },
  name: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 14, color: 'red', marginTop: 8 },
});
