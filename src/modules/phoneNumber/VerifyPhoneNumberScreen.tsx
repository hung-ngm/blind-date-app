import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import PrimaryButton from '../../common/PrimaryButton';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { mainTheme } from '../../themes/mainTheme';
import { AuthStackParamList } from '../../types/navigation';
import { PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '../utils/firebase';

type VerifyPhoneNumberScreenNavigationProps = NativeStackScreenProps<AuthStackParamList, "VerifyPhoneNumber">;

const VerifyPhoneNumberScreen = ({ route, navigation }: VerifyPhoneNumberScreenNavigationProps) => {
  const [verificationCode, setVerificationCode] = useState('');
  const { verificationId }: any = route.params;

  const handleCodeChanged = (code: string) => {
    setVerificationCode(code);
  }

  const handleConfirm = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId, 
        verificationCode
      );
      await signInWithCredential(auth, credential);
    } catch (err) {
      
    }
  }

  const handleResend = async () => {
    /** TODO */
  }

  return (
    <View style={styles.container}>
      <View style={styles.otpContainer}>
        <Text style={styles.verifyPhoneNumberText}>
          Type the verification code we've sent you
        </Text>
        <OTPInputView
          onCodeChanged={handleCodeChanged}
          style={styles.otpInput}
          pinCount={6}
          autoFocusOnLoad
          codeInputFieldStyle={styles.numberCellStyleBase}
          codeInputHighlightStyle={styles.numberCellStyleHighLighted}
        />
      </View>
      <View style={styles.labelContainer}>
        <PrimaryButton
          text="Confirm"
          disabled={!verificationId}
          textColor={mainTheme.WHITE_COLOR}
          onPress={handleConfirm}
        />
      </View>
      <View style={styles.labelContainer}>
        <TouchableHighlight
          onPress={handleResend}
          style={styles.resendLabelItem}
        >
          <Text style={styles.resendButton}>Send again</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default VerifyPhoneNumberScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  otpContainer: {
    paddingTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyPhoneNumberText: {
    fontSize: 15,
  },
  otpInput: {
    width: '80%',
    height: 200,
  },
  numberCellStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    color: mainTheme.PRIMARY_COLOR,
    borderColor: mainTheme.PRIMARY_COLOR,
  },
  numberCellStyleHighLighted: {
    color: mainTheme.WHITE_COLOR,
    backgroundColor: mainTheme.PRIMARY_COLOR,
    borderColor: mainTheme.PRIMARY_COLOR,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 10,
  },
  resendLabelItem: {
    margin: 5,
  },
  confirmButton: {
    color: mainTheme.WHITE_COLOR,
  },
  resendButton: {
    color: mainTheme.PRIMARY_COLOR,
  }
})