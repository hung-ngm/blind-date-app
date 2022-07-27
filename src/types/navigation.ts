import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  PhoneNumber: undefined;
  VerifyPhoneNumber: { verificationId: string } | undefined;
};

export type AppStackParamList = {
  Root: undefined;
  ProfileEditMain: undefined;
  ProfileEditPrompt: undefined;
  ProfileEditPromptList: undefined;
  ProfileEditPromptDetail: undefined;
  ProfileEditPassion: undefined;
  ProfileEditIdealPlaces: undefined
  ProfileEditGender: undefined;
  ChatMessages: undefined;
}


export type AppNavigationProp = NativeStackNavigationProp<AppStackParamList>

export type ProfileStackParamList = {
  ProfileDetail: undefined;
  Gender: undefined;
  Passion: undefined;
  IdealPlace: undefined;
  EnableNoti: undefined;
  Prompt: undefined;
  PromptList: undefined;
  PromptDetail: undefined;
}

export type RootScreenTabParamList = {
  Home: undefined;
  Match: undefined;
  Place: undefined;
  GetMatchedScreen: undefined;
  Chat: undefined;
  Profile: undefined;
}