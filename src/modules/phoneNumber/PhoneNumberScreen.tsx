import React, { useState, useRef } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import PrimaryButton from '../../common/PrimaryButton';
import { mainTheme } from '../../themes/mainTheme';
import { AuthStackParamList } from '../../types/navigation';
import { firebaseApp, auth } from '../utils/firebase';
import { ApplicationVerifier, PhoneAuthProvider } from 'firebase/auth';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

type PhoneNumberScreenNavigationProps = NativeStackScreenProps<AuthStackParamList, "PhoneNumber">;

const PhoneNumberScreen = ({ route, navigation }: PhoneNumberScreenNavigationProps) => {
  const [phoneNumber, setPhoneNumber] : any = useState('');
  const phoneInput = useRef<PhoneInput>(null);
  const recaptchaVerifier : any = useRef<ApplicationVerifier>(null);
  const [verificationId, setVerificationId]: any = useState('');
  const attemptInvisibleVerification = false;

  const firebaseConfig = firebaseApp ? firebaseApp.options : undefined;

  const handlePhoneNumberChanged = (text: string) => {
    const phoneNumberText = text;
    const callingCode = phoneInput.current?.getCallingCode();
    const fullNumber = '+' + callingCode + phoneNumberText;
    setPhoneNumber(fullNumber);
  } 

  const handleVerifyPhoneNumber = async () => {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
      navigation.navigate("VerifyPhoneNumber", {
        verificationId: verificationId,
      });
    } catch (err) {

    }
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.mobileContainer}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseApp.options}
          // attemptInvisibleVerification
        />
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
            onPress={handleVerifyPhoneNumber}
            extraStyles={styles.mobileButton}
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