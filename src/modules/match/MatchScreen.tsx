import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';
import Cards from './components/Cards';
import Card from './components/Card';

const MatchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header/>
      </View>
      <View style={styles.card}>
        {/* <Card card={mockData}/> */}
        <Cards/>
      </View>
    </View>
  )
}

export default MatchScreen;

const mockData = 
  {
    id: 1,
    displayName: 'Kylie',
    age: 17,
    job: 'Model',
    photoURL: 'http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg',
    promptStart: 'My simple pleasure is',
    promptEnd: 'buscus',
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    //backgroundColor:'blue'
  },
  headerContainer: {
    flex: 1,
    paddingTop: 1,
    //backgroundColor:'blue'
  },
  card: {
    flex:4,
    //backgroundColor:'blue',
    alignItems: 'center',
    
  }
})