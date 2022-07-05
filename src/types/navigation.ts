import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  PhoneNumber: undefined;
  VerifyPhoneNumber: { verificationId: string } | undefined;
};

export type AppStackParamList = {
  Home: undefined;
  ProfileDetail: undefined;
  Gender: undefined;
  Passion: undefined;
}

export type AppNavigationProp = NativeStackNavigationProp<AppStackParamList>