import React from 'react';
import { AppStackParamList } from '../../../types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { mainTheme } from '../../../themes/mainTheme';
import RootScreen from '../../root/RootScreen';
import ChatMessagesScreen from '../../chat/messages/ChatMessagesScreen';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: mainTheme.PRIMARY_COLOR
    }}>
        <Stack.Screen name="Root" component={RootScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="ChatMessages" component={ChatMessagesScreen} options={{
          headerShown: false,
        }} />
    </Stack.Navigator>
  )
} 

export default AppNavigator;