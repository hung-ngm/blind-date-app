import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ChatScreen</Text>
    </View>
  )
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})