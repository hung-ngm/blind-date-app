import React from 'react';
import { 
  StyleSheet, 
  Keyboard,
  KeyboardAvoidingView, 
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatMessagesHeader from './components/ChatMessagesHeader';
import { mainTheme } from '../../../themes/mainTheme';
import MessagesList from './components/MessagesList';
import ChatInput from './components/ChatInput';

const ChatMessagesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ChatMessagesHeader />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={10}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <MessagesList />
        </TouchableWithoutFeedback>
        <ChatInput />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ChatMessagesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainTheme.WHITE_COLOR,
    flex: 1,
  },
})