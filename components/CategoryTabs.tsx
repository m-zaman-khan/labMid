import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const categories = ['Fruits', 'Vegetables', 'Bakery', 'Milk'];

const CategoryTabs = () => {
  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <TouchableOpacity key={category} style={styles.tab}>
          <Text style={styles.text}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  tab: {
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 16,
  },
  text: {
    color: '#333',
  },
});

export default CategoryTabs;
