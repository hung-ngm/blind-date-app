import React, { useState, useRef } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import PrimaryButton from '../../common/PrimaryButton';
import { mainTheme } from '../../themes/mainTheme';
import { AuthStackParamList } from '../../types/navigation';

type PhoneNumberScreenNavigationProps = NativeStackScreenProps<AuthStackParamList, "PhoneNumber">;

const PhoneNumberScreen = ({ route, navigation }: PhoneNumberScreenNavigationProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef<PhoneInput>(null);

  const handlePhoneNumberChanged = (text: string) => {
    const phoneNumberText = text;
    const callingCode = phoneInput.current?.getCallingCode();
    const fullNumber = '+' + callingCode + phoneNumberText;
    setPhoneNumber(fullNumber);
  } 

  const handlePhoneNumberPress = () => {
    /** TODO */
    navigation.navigate("VerifyPhoneNumber");
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
            ref={phoneInput}
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