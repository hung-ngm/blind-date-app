import React from 'react';
import { View, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../../types/navigation';
import useRootNavigation from '../../navigation/hooks/useRootNavigation';
import BackButton from '../../../common/BackButton';

type ProfileFullViewNavigationProps = NativeStackScreenProps<AppStackParamList, "ProfileFullView">

const ProfileFullViewScreen = ({ route, navigation }: ProfileFullViewNavigationProps) => {
  const nav = useRootNavigation();
  const { profile }: any = route.params;
  const { firstName, age, job, photoUrl, prompt, promptAnswer, passions } = profile;

  const handleBackButtonPressed = () => {
     nav.navigate('Home');
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

  }
})