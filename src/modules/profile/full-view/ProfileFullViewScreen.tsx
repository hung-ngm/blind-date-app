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
import BackButton from '../../../common/BackButton';
import { Entypo } from '@expo/vector-icons';
import { mainTheme } from '../../../themes/mainTheme';

type ProfileFullViewNavigationProps = NativeStackScreenProps<AppStackParamList, "ProfileFullView">

const ProfileFullViewScreen = ({ route, navigation }: ProfileFullViewNavigationProps) => {
  const nav = useRootNavigation();
  const { profile }: any = route.params;
  const { firstName, lastName, age, job, photoUrl, prompt, promptAnswer, passions } = profile;

  const handleBackButtonPressed = () => {
    nav.navigate('Home');
  }

  const handleChatIconPressed = () => {
    // TODO: Change this since it should navigate to the DM chat of that profile
    nav.navigate('Chat');
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
            source={{ uri: photoUrl }}
            resizeMode="cover"
            style={styles.image}
            blurRadius={30}
          />
        </View>
        <View style={styles.personalDetailsContainer}>
          <View style={styles.nameAgeContainer}>
            <Text style={styles.nameAge}>{firstName} {lastName}, {age}</Text>
            <Text style={styles.job}>{job}</Text>
          </View>
          <View style={styles.chatIconContainer}>
            <TouchableWithoutFeedback onPress={handleChatIconPressed}>
              <Entypo name="chat" color={mainTheme.PRIMARY_COLOR} size={35} />
            </TouchableWithoutFeedback>
          </View>
          
          
          
          
        </View>
        
        
        
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default ProfileFullViewScreen;

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
    paddingTop: 5,
  },
  image: {
    width: '100%',
    height: 400,
  },
  personalDetailsContainer: {
    flexDirection: 'row',
    paddingTop: 40,
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
})