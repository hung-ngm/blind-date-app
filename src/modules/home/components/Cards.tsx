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
        <Swiper
          ref={swipeRef}
          containerStyle={styles.swiper}
          cards={mockData}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          horizontalSwipe={true}
          onSwipedLeft={() => {
            console.log("Swipe PASS");
          }}
          onSwipedRight={() => {
            console.log("Swipe MATCH");
          }}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: leftLabel,
            },
            right: {
              title: "MATCH",
              style: rightLabel,
            },
          }}
          renderCard={(card) => <Card key={card.id} card={card} />}

        />
      </View>
      <View style={styles.cardsButtonsContainer}>
        <CardsButtons swipeRef={swipeRef} />
      </View>
    </>
  )
}

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -120,
  },
  swiper: {
    backgroundColor: 'transparent',
  },
  cardsButtonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  }
})

const leftLabel = StyleSheet.create({
  label: {
    textAlign: "right",
    color: "red",
  },
});

const rightLabel = StyleSheet.create({
  label: {
    color: "#4DED30",
  },
});

const mockData = [
  {
    id: 1,
    displayName: 'Kylie',
    age: 17,
    job: 'Model',
    photoURL: 'http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg',
    promptStart: 'My simple pleasure is',
    promptEnd: 'buscus',
  },
  {
    id: 2,
    displayName: 'Kylie',
    age: 17,
    job: 'Model',
    photoURL: 'http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg',
    promptStart: 'My simple pleasure is',
    promptEnd: 'buscus',
  },
  {
    id: 3,
    displayName: 'Kylie',
    age: 17,
    job: 'Model',
    photoURL: 'http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg',
    promptStart: 'My simple pleasure is',
    promptEnd: 'buscus',
  },
]