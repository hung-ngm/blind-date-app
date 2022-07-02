import React from 'react';
import LoginScreen from '../../login/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../types/navigation';
import SignupScreen from '../../signup/SignupScreen';
import PhoneNumberScreen from '../../phoneNumber/PhoneNumberScreen';
import VerifyPhoneNumberScreen from '../../phoneNumber/VerifyPhoneNumberScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumberScreen} />
      <Stack.Screen name="VerifyPhoneNumber" component={VerifyPhoneNumberScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator;

