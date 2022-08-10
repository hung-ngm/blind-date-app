import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChatHeader from './shared/components/ChatHeader';
import MatchedProfiles from './matched_profiles/MatchedProfiles';
import ChatList from './chat_list/ChatList';

const ChatTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ChatHeader text="Messages" fontSize={25} />
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

export default ChatTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    paddingTop: 25,
    paddingLeft: 15,
  },
  matchedProfilesContainer: {
    flex: 3,
    paddingTop: 0,
  },
  messagesContainer: {
    flex: 8,
  }
})