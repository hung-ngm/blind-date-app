import React from 'react';
import { AppStackParamList } from '../../types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatOverviewScreen from './chat_overview/ChatOverviewScreen';
import ChatMessagesScreen from './messages/ChatMessagesScreen';

const Stack = createNativeStackNavigator<AppStackParamList>();

const ChatScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChatOverview"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ChatOverview" component={ChatOverviewScreen} />
      <Stack.Screen name="ChatMessages" component={ChatMessagesScreen} />
    </Stack.Navigator>
  )
}

export default ChatScreen;