import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import PrimaryButton from '../../../common/PrimaryButton';
import { mainTheme } from '../../../themes/mainTheme';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import BirthdayDatePicker from './components/BirthdayDatePicker';
import AvatarUpload from './components/AvatarUpload';
import useProfileNavigation from '../../navigation/hooks/useProfileNavigation';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';

const ProfileDetailScreen = () => {
  const navigation = useProfileNavigation();
  const { userProfile, setFirstName, setLastName, setJob } = useStore().profileStore;
  const {
    firstName,
    lastName,
    job,
    age,
    photoUrl,
  } = userProfile;

  const handleConfirmPress = () => {
      navigation.navigate('Gender');
  }

  const isConfirmButtonDisabled = (firstName === '')
    || (lastName === '')
    || (job === '')
    || (age === 0)
    || (photoUrl === '');
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="position"
      contentContainerStyle={styles.keyboardAvoid}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Profile Details</Text>
      </View>
      <View style={{
        ...styles.formContainer,
        flex: 6
      }}>
        <View style={{ flex: 2 }}>
          <AvatarUpload/>
        </View>
        <View style={{ flex: 4 }}>
          <View style={{ flex: 1 }}>
              <View style={styles.textInputContainer}>
                <FloatingLabelInput
                  label={'First name'}
                  value={firstName}
                  onChangeText={(fname) => setFirstName(fname)}
                />
              </View>
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.textInputContainer}>
              <FloatingLabelInput
                label={'Last name'}
                value={lastName}
                onChangeText={(lname) => setLastName(lname)}
              />
            </View>
          </View>
          <View style={{ flex: 1 }}>
              <View style={styles.textInputContainer}>
                <FloatingLabelInput
                  label={'Job'}
                  value={job}
                  onChangeText={(job) => setJob(job)}
                />
              </View>
          </View>
          <View style={{ flex: 1 }}>
            <BirthdayDatePicker/>
          </View>
        </View>
        <View style={{ flex: 1 }}>
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

export default observer(ProfileDetailScreen);

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 50,
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