import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'profile_icon_url' }} style={styles.icon} />
      <Text style={styles.title}>Your Store</Text>
      <Image source={{ uri: 'cart_icon_url' }} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
