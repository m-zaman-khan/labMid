import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import CategoryTabs from '../../components/CategoryTabs';
import ProductList from '../../components/ProductList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <CategoryTabs />
      <ProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
});

export default HomeScreen;
