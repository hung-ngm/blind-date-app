import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Header from './components/Header';
import Cards from './components/Cards';
//import BottomSheet from '../chat/shared/ProfileBottomsheet/BottomSheet';


const MatchTab = () => {
  return (
    <GestureHandlerRootView style={{ flex:1 }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header/>
        </View>
        <View style={styles.card}>
          <Cards/>
        </View>
        
      </View>
      <View>
        <Button 
          title="open sheet"
          onPress={()=> {}}
        />
      </View>
      {/* <BottomSheet/> */}
    </GestureHandlerRootView>
  )
}

export default MatchTab;

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