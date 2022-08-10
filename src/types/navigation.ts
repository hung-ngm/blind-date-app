import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Profile } from './profile';
import { Place } from './place';

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
  ProfileFullView: { profile: Profile | undefined }
  Places: undefined;
  GetMatched: undefined;
  PlaceFullView: { place: Place | undefined, onBackButtonPressed: () => void };
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
  Chat: undefined;
  Profile: undefined;
}