import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import PrimaryButton from '../../common/PrimaryButton';
import { mainTheme } from '../../themes/mainTheme';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import BirthdayDatePicker from './components/BirthdayDatePicker';
import useProfile from './hooks/useProfile';
import AvatarUpload from './components/AvatarUpload';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../types/navigation';
import NavigationButtons from './components/NavigationButtons';

type ProfileDetailScreenNavigationProps = NativeStackScreenProps<
  AppStackParamList,
  'ProfileDetail'
>
const ProfileDetailScreen = ({ navigation }: ProfileDetailScreenNavigationProps) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    birthday,
    setBirthday,
    avatar,
    setAvatar,
    submitProfile,
  } = useProfile();

  const handleConfirmPress = () => {
      // submitProfile();
      navigation.navigate('Gender');
  }

  const isConfirmButtonDisabled =  (firstName === '') || (lastName === '') || (birthday === null) || (avatar === null);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="position"
      contentContainerStyle={styles.keyboardAvoid}
    >
      <View style={{
        flex:1
      }}>
        <NavigationButtons/>
      </View>
      <View style={{
          flex: 1
        }}
      >
        <Text style={styles.title}>Profile Details</Text>
      </View>
      <View style={{
        ...styles.formContainer,
        flex: 5
      }}>
        <View style={{
          flex: 2
        }}>
          <AvatarUpload avatar={avatar} setAvatar={setAvatar}/>
        </View>
        <View style={{
          flex: 2
        }}>
          <View style={{
            flex: 1,
          }}>
              <View style={styles.textInputContainer}>
                <FloatingLabelInput
                  label={'First name'}
                  value={firstName}
                  onChangeText={setFirstName}
                />
              </View>
          </View>
          <View style={{
            flex: 1
          }}>
            <View style={styles.textInputContainer}>
              <FloatingLabelInput
                label={'Last name'}
                value={lastName}
                onChangeText={setLastName}
              />
            </View>
          </View>
          <View style={{
            flex: 1
          }}>
            <BirthdayDatePicker
              birthday={birthday}
              setBirthday={setBirthday}
            />
          </View>
        </View>
        <View style={{
          flex: 1
        }}>
          <PrimaryButton
            text='Confirm'
            textColor={mainTheme.WHITE_COLOR}
            onPress={handleConfirmPress}
            extraTouchableHighlightProps={{
              disabled: isConfirmButtonDisabled
            }}
            extraStyles={isConfirmButtonDisabled ? {
              opacity: '0.5'
            } : {}}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default ProfileDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  keyboardAvoid: {
    flex: 1,
  },
  title: {
    paddingLeft: 40,
    fontSize: 34,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    width: 300,
    height: 50,
  },
})