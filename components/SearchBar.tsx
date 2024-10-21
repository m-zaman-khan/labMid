import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#888" />
      <TextInput placeholder="Search for products" style={styles.input} />
      <Ionicons name="filter" size={20} color="#888" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginLeft: 8,
  },
});

export default SearchBar;
