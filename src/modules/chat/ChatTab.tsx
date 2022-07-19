import React from 'react';
import { ChatStackParamList } from '../../types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatOverviewScreen from './chat_overview/ChatOverviewScreen';
import ChatMessagesScreen from './messages/ChatMessagesScreen';

const Stack = createNativeStackNavigator<ChatStackParamList>();

const ChatTab = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChatOverview"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ChatOverview" component={ChatOverviewScreen} />
      <Stack.Screen 
        name="ChatMessages"
        component={ChatMessagesScreen} 
      />
    </Stack.Navigator>
  )
}

export default ChatTab;
