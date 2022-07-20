import React from 'react';
import { AppStackParamList } from '../../../types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { mainTheme } from '../../../themes/mainTheme';
import RootScreen from '../../root/RootScreen';
import ProfileEditMainScreen from '../../profile/edit-main/ProfileEditMainScreen';
import EditPromptScreen from '../../profile/prompt/EditPromptScreen';
import { useStore } from '../../stores/store';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  const { user } = useStore().userStore;
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: mainTheme.PRIMARY_COLOR
    }}>
        <Stack.Screen name="Root" component={RootScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="ProfileEditMain" component={ProfileEditMainScreen} options={{
          title: user?.firstName || "Lam"
        }}/>
        <Stack.Screen name="ProfileEditPrompt" component={EditPromptScreen} />
    </Stack.Navigator>
  )
} 

export default AppNavigator;