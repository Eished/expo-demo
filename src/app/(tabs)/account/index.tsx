import ProductList from '@/components/product-list';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Account() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type='code'>Account</ThemedText>
        <ThemedView style={styles.link}>
          <Pressable>
            <Link href='/profile'>Profile</Link>
          </Pressable>
        </ThemedView>
        <ThemedView>
          <TouchableOpacity>
            <Link href='/profile'>Profile</Link>
          </TouchableOpacity>
        </ThemedView>
        <ThemedView style={styles.products}>
          <ProductList />
        </ThemedView>
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
  link: { width: '100%', height: 28, backgroundColor: 'lightblue' },
  products: {},
});
