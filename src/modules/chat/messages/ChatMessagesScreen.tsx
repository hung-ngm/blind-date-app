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
import PlacesList from './components/PlacesList';
import ChatInput from './components/ChatInput';
import LockedChatBox from './components/LockedChatBox';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';

const ChatMessagesScreen = () => {
  const { currentMatch } = useStore().matchStore;
  const { user } = useStore().userStore;

  if (!currentMatch || !user) {
    return null;
  }

  const otherUser = currentMatch.users[currentMatch.userMatched.find((id) => id !== user.uid) as string];

  return (
    <SafeAreaView style={styles.container}>
      <ChatMessagesHeader 
        otherUser={otherUser} 
        currentMatch={currentMatch}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={10}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {currentMatch.canChat ? <MessagesList /> : <PlacesList />}
        </TouchableWithoutFeedback>
        {currentMatch.canChat ? <ChatInput /> : <LockedChatBox />}
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default observer(ChatMessagesScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainTheme.WHITE_COLOR,
    flex: 1,
  },
})