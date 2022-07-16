import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChatHeader from '../shared/components/ChatHeader';
import SearchBar from '../shared/components/SearchBar';
import MatchedProfiles from '../matched_profiles/MatchedProfiles';
import ChatList from '../chat_list/ChatList';

const ChatOverviewScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ChatHeader text="Messages" fontSize={25} />
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
      <View style={styles.matchedProfilesContainer}>
        <MatchedProfiles />
      </View>
      <View style={styles.messagesContainer}>
        <ChatList />
      </View>
    </View>
  )
}

export default ChatOverviewScreen;

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