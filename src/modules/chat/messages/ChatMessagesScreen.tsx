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
import { useStore } from '../../stores/store';

const ChatMessagesScreen = () => {
  const { currentMatch } = useStore().matchStore;
  const { user } = useStore().userStore;

  if (!currentMatch || !user) {
    return null;
  }

  const otherUser = currentMatch.users[currentMatch.userMatched.find((id) => id !== user.uid) as string];

  return (
    <SafeAreaView style={styles.container}>
      <ChatMessagesHeader otherUser={otherUser} />
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