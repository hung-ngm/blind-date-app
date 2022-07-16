import React, { useContext } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import PrimaryButton from '../../../common/PrimaryButton';
import { mainTheme } from '../../../themes/mainTheme';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import BirthdayDatePicker from './components/BirthdayDatePicker';
import AvatarUpload from './components/AvatarUpload';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList, ProfileStackParamList } from '../../../types/navigation';
import NavigationButtons from '../components/NavigationButtons';
import { ProfileContext } from '../context/ProfileProvider';

type ProfileDetailScreenNavigationProps = NativeStackScreenProps<
  ProfileStackParamList,
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
  } = useContext(ProfileContext);

  const handleConfirmPress = () => {
      navigation.navigate('Gender');
  }

  const isConfirmButtonDisabled = false  // (firstName === '') || (lastName === '') || (birthday === null) || (avatar === null);
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
          <AvatarUpload/>
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
                  onChangeText={(fname) => setFirstName(fname)}
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
                onChangeText={(lname) => setLastName(lname)}
              />
            </View>
          </View>
          <View style={{
            flex: 1
          }}>
            <BirthdayDatePicker/>
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