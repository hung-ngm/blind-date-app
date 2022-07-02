import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { mainTheme } from '../../themes/mainTheme';

const VerifyPhoneNumberScreen = () => {
  const [code, setCode] = useState('');

  const handleCodeChanged = (code: string) => {
    setCode(code);
  }

  const verifyPhoneNumber = () => {
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
          pinCount={4}
          autoFocusOnLoad
          codeInputFieldStyle={styles.numberCellStyleBase}
          codeInputHighlightStyle={styles.numberCellStyleHighLighted}
        />
      </View>
      <View style={styles.resendLabelContainer}>
        <TouchableHighlight
          onPress={verifyPhoneNumber}
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
  resendLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 10,
  },
  resendLabelItem: {
    margin: 5,
  },
  resendButton: {
    color: mainTheme.PRIMARY_COLOR,
  }
})