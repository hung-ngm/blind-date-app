import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../../types/navigation';
import PrimaryButton from '../../../common/PrimaryButton';
import useRootNavigation from '../../navigation/hooks/useRootNavigation';
import { mainTheme } from '../../../themes/mainTheme';
import BackButton from '../../../common/BackButton';

type ProfileFullViewNavigationProps = NativeStackScreenProps<AppStackParamList, "ProfileFullView">

const ProfileFullViewScreen = ({ route, navigation }: ProfileFullViewNavigationProps) => {
  const nav = useRootNavigation();
  const handleBackButtonPressed = () => {
     nav.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <BackButton
          onPress={handleBackButtonPressed}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          text="Test button to Home"
          textColor={mainTheme.WHITE_COLOR}
          onPress={handleBackButtonPressed}
        />
      </View>
      
    </View>
  )
}

export default ProfileFullViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  backButtonContainer: {
    paddingTop: 30,
    paddingLeft: 20,
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }
})