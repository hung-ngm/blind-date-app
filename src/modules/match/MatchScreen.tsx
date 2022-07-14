import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Cards from './components/Cards';


const MatchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header/>
      </View>
      <View style={styles.card}>
        <Cards/>
      </View>
    </View>
  )
}

export default MatchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  headerContainer: {
    flex: 1,
    paddingTop: 1,
  },
  card: {
    flex:4,
    alignItems: 'center',
    
  }
})