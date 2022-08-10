import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
import PlaceCards from './components/PlaceCards';
import PrimaryButton from '../../common/PrimaryButton';
import useRootNavigation from '../navigation/hooks/useRootNavigation';

const PlaceRecommendationScreen = () => {
  const rootNav = useRootNavigation();

  const handleButtonPressed = () => {
    rootNav.navigate('Home');
  }

  return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header/>
        </View>
        <View style={styles.placeCards}>
          <PlaceCards/>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton 
            text="Back to Home" 
            onPress={handleButtonPressed}
          />
        </View>
        
      </View>
  )
}

export default PlaceRecommendationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  headerContainer: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
  },
  placeCards: {
    flex:4,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})