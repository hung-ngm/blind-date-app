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
import PassionButton from './components/PassionButton';

type ProfileFullViewNavigationProps = NativeStackScreenProps<AppStackParamList, "ProfileFullView">

const ProfileFullViewScreen = ({ route }: ProfileFullViewNavigationProps) => {
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
        <View style={styles.promptContainer}>
          <Text style={styles.promptTitle}>Prompt</Text>
          <View style={styles.promptDetailsContainer}>
            <Text style={styles.promptText}>{prompt}</Text>
            <Text style={styles.promptAnswerText}>{promptAnswer}</Text>
          </View>
        </View>
        <View style={styles.passionsContainer}>
          <View style={styles.passionsTitleContainer}>
            <Text style={styles.passionsTitle}>Passions</Text>
          </View>
          <View style={styles.passionsLabels}>
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
  promptContainer: {
    paddingLeft: 30,
    paddingTop: 40,
  },
  promptTitle: {
    fontSize: 25,
  },
  promptDetailsContainer: {
    paddingTop: 15,
  },
  promptText: {
    fontSize: 20,
  },
  promptAnswerText: {
    fontSize: 30,
  },
  passionsContainer: {
    paddingTop: 30,
  },
  passionsTitleContainer: {
    paddingLeft: 30,
  },
  passionsTitle: {
    fontSize: 25,
  },
  passionsLabels: {
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
    name: 'American'
  },
  {
    id: 2,
    name: 'Burgers'
  },
  {
    id: 3,
    name: 'Music'
  },
  {
    id: 4,
    name: 'Dancing'
  },
  {
    id: 5,
    name: 'Modeling'
  },
]