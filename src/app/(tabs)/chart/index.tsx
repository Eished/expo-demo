import ProductList from '@/components/product-list';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import ExpoRadialChartView from '@/modules/expo-radial-chart/src/ExpoRadialChartView';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Chart() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.charts}>
          <ThemedText type='code' style={styles.title}>
            调用第三方原生表格库演示
          </ThemedText>

          <ExpoRadialChartView
            style={styles.container}
            data={[
              {
                color: '#ff0000',
                percentage: 0.5,
              },
              {
                color: '#00ff00',
                percentage: 0.2,
              },
              {
                color: '#0000ff',
                percentage: 0.3,
              },
            ]}
          />
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
  title: {},
  charts: {
    height: '60%',
    width: '100%',
  },
  products: {},
});
