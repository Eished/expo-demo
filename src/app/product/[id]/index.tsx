// 📁 app/product/[id].tsx
import ProductList from '@/components/product-list';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { Button, FlatList, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProductDetailScreen() {
  const router = useRouter();
  // 🌟 从 URL 中提取 [id] 参数
  const { id } = useLocalSearchParams<{ id: string }>();

  // 在实际项目中，你会在这里写一个 useEffect，根据 id 去请求后端接口
  // const { data } = useFetchProductDetail(id);

  const DATA = [
    {
      title: '第一部分',
      data: [
        {
          key: '1',
          title: '轮播图',
        },
        {
          key: '2',
          title: '标题',
        },
      ],
    },
    {
      title: '第二部分 ',
      data: [
        {
          key: '3',
          title: '详情',
        },
        {
          key: '4',
          title: '评论',
        },
      ],
    },
    {
      title: '第三部分',
      data: [
        {
          key: '5',
          title: '推荐',
        },
      ],
    },
  ];

  const renderSectionItem = (item: { key: string; title: string }) => {
    switch (item.key) {
      case '1':
        return (
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <FlatList
              horizontal
              pagingEnabled
              data={Array(4).fill(0)}
              renderItem={({ item, index }) => (
                <View style={styles.img} key={index}>
                  <Text>{index}</Text>
                </View>
              )}
            />
          </View>
        );
      case '2':
        return (
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.title}>正在查看商品 ID: {id}</Text>
          </View>
        );
      case '3':
        return (
          <>
            <Text style={styles.title}>{item.title}</Text>
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <View style={styles.box} key={i}>
                  <Text>{i}</Text>
                </View>
              ))}
          </>
        );
      case '4':
        return (
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity style={styles.btn}>
              <Link href={`/product/${id}/comments`}>查看商品评价</Link>
            </TouchableOpacity>
          </View>
        );
      case '5':
        return (
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <ProductList />
          </View>
        );

      default:
        break;
    }
    return <View style={styles.content}></View>;
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
        renderItem={({ item }) => renderSectionItem(item)}
        contentContainerStyle={styles.content}
      ></SectionList>

      {/* 电商经典的底部操作栏（吸底） */}
      <View style={styles.bottomBar}>
        <Button title='加入购物车' onPress={() => alert('已加入购物车')} />
        <Button title='立即购买' color='red' onPress={() => alert('跳转支付')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  content: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold' },
  desc: { marginTop: 20, color: '#666', lineHeight: 24 },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingBottom: 30, // 适配 iPhone 底部安全区
  },
  box: {
    height: 340,
    width: 340,
    backgroundColor: 'lightblue',
    margin: 6,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  img: {
    height: 340,
    width: 340,
    padding: 10,
    backgroundColor: 'lightblue',
  },
  btn: {
    backgroundColor: '#aaa',
  },
});
