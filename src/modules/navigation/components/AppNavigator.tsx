import React from 'react';
import HomeScreen from '../../home/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../../types/navigation';
import ProfileDetailScreen from '../../profile/user-info/UserInfoScreen';
import { useStore } from '../../stores/store';
import GenderScreen from '../../profile/gender/GenderScreen';
import PassionScreen from '../../profile/passion/PassionScreen';
import IdealPlacesScreen from '../../profile/ideal-places/IdealPlacesScreen';
import EnableNotiScreen from '../../enable-noti/EnableNotiScreen';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  const { user } = useStore().userStore;
  const hasProfile = user && user.name && user.email && user.phoneNumber;
  const initialRouteName: keyof AppStackParamList = hasProfile ? "Home" : "ProfileDetail";
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
      <Stack.Screen name="Gender" component={GenderScreen} />
      <Stack.Screen name="Passion" component={PassionScreen} />
      <Stack.Screen name="IdealPlace" component={IdealPlacesScreen} />
      <Stack.Screen name="EnableNoti" component={EnableNotiScreen} />
    </Stack.Navigator>
  )
}


export default AppNavigator;