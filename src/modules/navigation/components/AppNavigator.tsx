import React from 'react';
import HomeScreen from '../../home/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../../types/navigation';
import ProfileDetailScreen from '../../profile/ProfileDetailScreen';
import { useStore } from '../../stores/store';
import GenderScreen from '../../profile/GenderScreen';
import PassionScreen from '../../profile/PassionScreen';
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
    </Stack.Navigator>
  )
}


export default AppNavigator;