import React from 'react';
import LoginScreen from '../../login/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../types/navigation';
import SignupScreen from '../../signup/SignupScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  )
}


export default AuthNavigator;

