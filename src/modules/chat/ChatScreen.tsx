import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChatHeader from './shared/components/ChatHeader';
import SearchBar from './shared/components/SearchBar';
import MatchedProfiles from './matched_profiles/MatchedProfiles';
import ChatList from './chat_list/ChatList';
import { ChatStackParamList } from '../../types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatOverviewScreen from './chat_overview/ChatOverviewScreen';
import ChatMessagesScreen from './messages/ChatMessagesScreen';

const Stack = createNativeStackNavigator<ChatStackParamList>();

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    paddingTop: 25,
    paddingLeft: 15,
  },
  searchBarContainer: {
    flex: 1.5,
    paddingLeft: 15,
    paddingTop: 0,
  },
  matchedProfilesContainer: {
    flex: 3,
    paddingTop: 0,
  },
  messagesContainer: {
    flex: 8,
  }
})