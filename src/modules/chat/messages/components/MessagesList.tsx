import React from 'react';
import { 
  StyleSheet, 
  FlatList,
  ActivityIndicator 
} from 'react-native';
import MessageItem from './MessageItem';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';
import { mainTheme } from '../../../../themes/mainTheme';

const MessagesList = () => {
  const { user } = useStore().userStore;
  const { currentMatch } = useStore().matchStore;
  const { messages, messageLimit, hasMore, loadMore } = useStore().messageStore;

  if (!currentMatch || !user) {
    return null;
  }
  const otherUser = currentMatch.users[currentMatch.userMatched.find((id) => id !== user.uid) as string];

  return (
    <FlatList
      style={styles.container}
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MessageItem 
          message={item} 
          otherUser={otherUser} 
          isSender={item.senderId === user.uid} 
        />
      )}
      inverted={true}
      initialNumToRender={messageLimit}
      onEndReachedThreshold={0.5}
      onEndReached={loadMore}
      ListFooterComponent={() => 
        hasMore ? 
        <ActivityIndicator 
          size="large" 
          color={mainTheme.PRIMARY_COLOR} 
        /> : null
      }
    />
  )
}

export default observer(MessagesList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    paddingLeft: 16,
  }
})