import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MatchedProfiles from './components/MatchedProfiles';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
      <View style={styles.matchedProfilesContainer}>
        <MatchedProfiles />
      </View>
      

    </View>
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
    flex: 9,
    paddingTop: 0,
  }
})