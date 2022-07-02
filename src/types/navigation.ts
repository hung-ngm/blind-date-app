import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  PhoneNumber: undefined;
  VerifyPhoneNumber: undefined;
};

export type AppStackParamList = {
  Home: undefined;
}

export type AppNavigationProp = NativeStackNavigationProp<AppStackParamList>