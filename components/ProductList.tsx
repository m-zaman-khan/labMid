// ProductList.tsx (Component using the Hook)
import React from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';
import useProducts from '@/hooks/useProduct';

const ProductList = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <FlatList
  data={products}
  keyExtractor={(item) => item.id.toString()} // Ensure unique keys
  renderItem={({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>${(item.price || 0)}</Text>
    </View>
  )}
/>

  );
};

export default ProductList;
