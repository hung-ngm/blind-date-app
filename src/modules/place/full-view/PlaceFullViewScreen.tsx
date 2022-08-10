import React, { useEffect } from 'react';
import { 
  View, 
  StyleSheet, 
  Image, 
  SafeAreaView, 
  ScrollView, 
  Text,
  TouchableWithoutFeedback,
  LogBox
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../../types/navigation';
import BackButton from '../../../common/BackButton';
import { Entypo } from '@expo/vector-icons';
import { mainTheme } from '../../../themes/mainTheme';
import CategoryButton from './components/CategoryButton';

type PlaceFullViewNavigationProps = NativeStackScreenProps<AppStackParamList, "PlaceFullView">

const PlaceFullViewScreen = ({ route }: PlaceFullViewNavigationProps) => {
  const { place, onBackButtonPressed } : any = route.params;

  useEffect(() => {
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
  }, [])

  const handlePhoneIconPressed = () => {
    // TODO: Change this so that it can call the restaurants immediately
  }

  if (!place) {
    return null;
  }

  const { name, photoUrl, categories, address } = place;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.backButtonContainer}>
          <BackButton
            onPress={onBackButtonPressed}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: photoUrl }}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <View style={styles.placeDetailsContainer}>
          <View style={styles.placeNameDescriptionContainer}>
            <Text style={styles.placeName}>{name}</Text>
            <Text style={styles.placeDescription}>{address}</Text>
          </View>
          <View style={styles.phoneIconContainer}>
            <TouchableWithoutFeedback onPress={handlePhoneIconPressed}>
              <Entypo name="phone" color={mainTheme.PRIMARY_COLOR} size={35} />
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={styles.categoriesContainer}>
          <View style={styles.categoriesTitleContainer}>
            <Text style={styles.categoriesTitle}>Categories</Text>
          </View>
          <View style={styles.categoriesLabels}>
            {categories.map((item: any, index: number) => (
              <CategoryButton 
                key={index}
                category={item} 
                extraStyles={{
                  margin: 5,
                }}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PlaceFullViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  scrollView: {
    
  },
  backButtonContainer: {
    paddingTop: 10,
    paddingLeft: 20,
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    paddingTop: 7,
  },
  image: {
    width: '100%',
    height: 400,
  },
  placeDetailsContainer: {
    flexDirection: 'row',
    paddingTop: 80,
    paddingLeft: 30,
  },
  placeNameDescriptionContainer: {
    flex: 8
  },
  placeName: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  placeDescription: {
    fontSize: 20,
  },
  phoneIconContainer: {
    flex: 2,
    paddingLeft: 50,
    paddingTop: 12,
  },

  categoriesContainer: {
    paddingTop: 30,
  },
  categoriesTitleContainer: {
    paddingLeft: 30,
  },
  categoriesTitle: {
    fontSize: 25,
  },
  categoriesLabels: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 15,
    flexWrap: 'wrap',
  },
})