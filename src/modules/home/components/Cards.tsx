import React, { useRef } from 'react';
import Card from './Card';
import CardsButtons from './CardsButtons';
import { View, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';

const Cards = () => {
  const swipeRef = useRef<Swiper<any>>(null);

  return (
    <>
      <View style={styles.container}>
        <Card />
      </View>
      <CardsButtons swipeRef={swipeRef} />
    </>
  )
}

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})