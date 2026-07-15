// 📁 app/(tabs)/index.tsx
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type IProduct = {
  id: string;
  name: string;
  price: string;
};

// 模拟商品数据
const PRODUCTS: IProduct[] = [
  { id: '101', name: '苹果 iPhone 15 Pro', price: '¥7999' },
  { id: '102', name: '索尼 WH-1000XM5 耳机', price: '¥2499' },
  { id: '103', name: '大疆 Mini 4 Pro 无人机', price: '¥4788' },
];

export default function ProductList() {
  const router = useRouter();

  const renderItem = ({ item }: { item: IProduct }) => (
    <TouchableOpacity
      style={styles.card}
      // 🌟 核心跳转逻辑：使用模版字符串传入动态 ID
      onPress={() => router.push(`/product/${item.id}`)}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList data={PRODUCTS} keyExtractor={item => item.id} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  card: { padding: 20, backgroundColor: 'white', marginBottom: 10, borderRadius: 8 },
  name: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 14, color: 'red', marginTop: 8 },
});
