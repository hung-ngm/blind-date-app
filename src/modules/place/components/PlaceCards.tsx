import {
    View,
    FlatList,
    StyleSheet
} from 'react-native';
import React from 'react';
import PlaceCard from './PlaceCard';
import useAppNavigation from '../../navigation/hooks/useAppNavigation';

const PlaceCards = () => {
  const navigation = useAppNavigation();
  const handlePlacePressed = () => {
    navigation.navigate('PlaceFullView');
  }
  return (
    <View style = {styles.container}>
      <FlatList 
        numColumns={2}
        data={mockData}
        renderItem={({item}) => (
          <PlaceCard 
            placeCard={item} 
            onPress={handlePlacePressed}
          />
        )}
      >
      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mockData = [
  {
    id: 1,
    name: 'Res 1',
    priceMin: 10,
    priceMax: 200,
    city: 'Boston',
    country: 'USA',
    categories: ['a', 'b'],
    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXtBit6csA2wbzs-S4D36i4dDUvlwVjADaYg&usqp=CAU',
  },
  {
    id: 2,
    name: 'Res 2',
    priceMin: 10,
    priceMax: 200,
    city: 'Hanoi',
    country: 'Vietnam',
    categories: ['a', 'b'],
    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLTRL8Wbsp48zLpKjk30gh94B4Y19WJJKYkVjTPC5Rj-jzSv3Kz_irql-0Qm89RVhMoMo&usqp=CAU',
  },
  {
    id: 3,
    name: 'Res 3',
    priceMin: 10,
    priceMax: 200,
    city: 'Tokyo',
    country: 'Japan',
    categories: ['a', 'b'],
    photoUrl: 'https://image-tc.galaxy.tf/wijpeg-bjktly0b6ohnhdedjegyau3mf/wide.jpg?crop=0%2C52%2C1000%2C563',
  },
  {
    id: 4,
    name: 'Res 4',
    priceMin: 10,
    priceMax: 200,
    city: 'Perking',
    country: 'China',
    categories: ['a', 'b'],
    photoUrl: 'https://duongsrestaurant.com/wp-content/uploads/2020/04/home-duong-restaurant-2.jpg',
  },
  {
    id: 5,
    name: 'Res 5',
    priceMin: 10,
    priceMax: 200,
    city: 'Singapore',
    country: 'Singapore',
    categories: ['a', 'b'],
    photoUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/23/26/00/d4/main-lobby.jpg',
  },
]

export default PlaceCards;