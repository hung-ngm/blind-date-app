import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../../common/PrimaryButton';
import NavigatorButtonGroup from './components/NavigatorButtonGroup';
import { mainTheme } from '../../themes/mainTheme';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import BirthdayDatePicker from './components/BirthdayDatePicker';
import useProfile from './hooks/useProfile';

function ProfileDetailScreen() {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    birthday,
    setBirthday
  } = useProfile();

  const handleConfirmPress = () => {

  }

  const isConfirmButtonDisabled =  (firstName === '') || (lastName === '') || (birthday === null);
  return (
    <View style={styles.container}>
      <View style={{
        flex: 1
      }}>
        <NavigatorButtonGroup />
      </View>
      <View style={{
          flex: 1
        }}
      >
        <Text>Profile Details</Text>
      </View>
      <View style={{
        ...styles.formContainer,
        flex: 5
      }}>
        <View style={{
          flex: 1
        }}>
          <Text>Avatar</Text>
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
    </View>
  )
}

export default ProfileDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    width: 300,
    height: 50,
  },
  textInputInput: {
    color: 'red',
  }
})