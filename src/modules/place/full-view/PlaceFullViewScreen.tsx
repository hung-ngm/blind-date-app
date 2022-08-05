import React from 'react';
import { 
  View, 
  StyleSheet, 
  Image, 
  SafeAreaView, 
  ScrollView, 
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../../types/navigation';
import useRootNavigation from '../../navigation/hooks/useRootNavigation';
import useAppNavigation from '../../navigation/hooks/useAppNavigation';
import BackButton from '../../../common/BackButton';
import { Entypo } from '@expo/vector-icons';
import { mainTheme } from '../../../themes/mainTheme';
import PassionButton from './components/CategoryButton';

type PlaceFullViewNavigationProps = NativeStackScreenProps<AppStackParamList, "PlaceFullView">

const PlaceFullViewScreen = () => {
  const rootNav = useRootNavigation();
  const appNav = useAppNavigation();

  // If we have Place type, then needs these
  // const { name, categories, menu, address } = place;

  const handleBackButtonPressed = () => {
    appNav.navigate('Places');
  }

  const handleChatIconPressed = () => {
    // TODO: Change this since it should navigate to the DM chat of that profile
    rootNav.navigate('Chat');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.backButtonContainer}>
          <BackButton
            onPress={handleBackButtonPressed}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://miro.medium.com/max/1838/1*QMjdHidfxnwizai5Xqj47Q.jpeg" }}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <View style={styles.personalDetailsContainer}>
          <View style={styles.nameAgeContainer}>
            <Text style={styles.nameAge}>Pho Chui</Text>
            <Text style={styles.job}>An pho la phai chui</Text>
          </View>
          <View style={styles.chatIconContainer}>
            <TouchableWithoutFeedback onPress={handleChatIconPressed}>
              <Entypo name="chat" color={mainTheme.PRIMARY_COLOR} size={35} />
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={styles.categoriesContainer}>
          <View style={styles.categoriesTitleContainer}>
            <Text style={styles.categoriesTitle}>Categories</Text>
          </View>
          <View style={styles.categoriesLabels}>
            {mockPassionsData.map((item) => (
              <PassionButton 
                key={item.id}
                passion={item.name} 
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
  personalDetailsContainer: {
    flexDirection: 'row',
    paddingTop: 80,
    paddingLeft: 30,
  },
  nameAgeContainer: {
    flexDirection: 'column',
  },
  nameAge: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  job: {
    fontSize: 20,
  },
  chatIconContainer: {
    flexDirection: 'row',
    paddingLeft: 115,
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

const mockPassionsData = [
  {
    id: 1,
    name: 'Cafe'
  },
  {
    id: 2,
    name: 'Vietnamese'
  },
  {
    id: 3,
    name: 'Beverage'
  },
  {
    id: 4,
    name: 'Fast Food'
  },
  {
    id: 5,
    name: 'Pho'
  },
]