import React, { useRef } from 'react';
import Card from './Card';
import CardsButtons from './SwipeButtons';
import NoCard from './NoCard';
import { View, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { Profile } from '../../../types/profile';
import useAppNavigation from '../../navigation/hooks/useAppNavigation';

const Cards = () => {
  const swipeRef = useRef<Swiper<any>>(null);
  const { profiles, unlikeProfile, likeProfile } = useStore().profileStore;
  const navigation = useAppNavigation();
  const handleTabCard = (_index: any) => {
    navigation.navigate('ProfileFullView');
  }

  return (
    <>
      <View style={styles.container}>
        <Swiper
          ref={swipeRef}
          containerStyle={styles.swiper}
          cards={profiles}
          stackSize={profiles.length > 0 ? 5: 1}
          cardIndex={0}
          animateCardOpacity
          onTapCard={handleTabCard}
          verticalSwipe={false}
          horizontalSwipe={true}
          onSwipedLeft={unlikeProfile}
          onSwipedRight={likeProfile}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: leftLabel,
            },
            right: {
              title: "LIKE",
              style: rightLabel,
            },
          }}
          renderCard={(card: Profile) => 
            card ? <Card key={card.id} card={card} /> : <NoCard />
          }

        />
      </View>
      <View style={styles.cardsButtonsContainer}>
        <CardsButtons swipeRef={swipeRef} />
      </View>
    </>
  )
}

export default observer(Cards);

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
    firstName: 'Kylie',
    age: 17,
    job: 'Model',
    photoUrl: 'http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg',
    prompt: 'My simple pleasure is',
    promptAnswer: 'buscus',
  },
  {
    id: 2,
    firstName: 'Kylie',
    age: 17,
    job: 'Model',
    photoUrl: 'http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg',
    prompt: 'My simple pleasure is',
    promptAnswer: 'buscus',
  },
  {
    id: 3,
    firstName: 'Kylie',
    age: 17,
    job: 'Model',
    photoUrl: 'http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg',
    prompt: 'My simple pleasure is',
    promptAnswer: 'buscus',
  },
]