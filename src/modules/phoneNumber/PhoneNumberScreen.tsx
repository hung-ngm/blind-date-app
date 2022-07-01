import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import PrimaryButton from '../../common/PrimaryButton';
import { mainTheme } from '../../themes/mainTheme';

const PhoneNumberScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChanged = (text: string) => {
    setPhoneNumber(text);
  } 

  const handlePhoneNumberPress = () => {
    /** TODO */
  }

  return (
    <View style={styles.container}>
      <View style={styles.mobileContainer}>
        <Text style={styles.mobileTitle}>My mobile</Text>
        <Text style={styles.mobileText}>
          Please enter your valid phone number. We will send you a 4-digit code to verify your account
        </Text>
        <View style={styles.mobileInput}>
          <PhoneInput
            defaultValue={phoneNumber}
            defaultCode="DM"
            onChangeText={handlePhoneNumberChanged}
            layout="first"
            withDarkTheme
            withShadow
            autoFocus
          />
        </View>
        <View style={styles.mobileButtonContainer}>
          <PrimaryButton
            text='Continue'
            textColor={mainTheme.WHITE_COLOR}
            onPress={handlePhoneNumberPress}
            extraProps={styles.mobileButton}
          />
        </View>
      </View>
    </View>
  )
}

export default PhoneNumberScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mobileContainer: {
    paddingTop: 150,
    margin: 30,
  },

  mobileTitle: {
    fontSize: 35,
    paddingTop: 0,
  },
  mobileText: {
    paddingTop: 5,
  },
  mobileInput: {
    paddingTop: 15,
    marginLeft: 0,
  },
  mobileButtonContainer: {
    paddingTop: 40,
  },
  mobileButton: {
    margin: 15,
  }
})