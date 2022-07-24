import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
import PlaceCards from './components/PlaceCards';


const PlaceRecommendationScreen = () => {
  return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header/>
        </View>
        <View style={styles.placeCards}>
          <PlaceCards/>
        </View>
        
      </View>
  )
}

export default PlaceRecommendationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  headerContainer: {
    flex: 1,
    paddingTop: 1,
  },
  placeCards: {
    flex:4,
    alignItems: 'center',
  }
})