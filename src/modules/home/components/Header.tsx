import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Discover</Text>
        <Text style={styles.cityText}>New York</Text>
      </View>
      
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  headerText: {
    fontSize: 25,
  },
  cityText: {
    fontSize: 15,
  }
})