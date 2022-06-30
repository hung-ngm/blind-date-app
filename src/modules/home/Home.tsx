import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})