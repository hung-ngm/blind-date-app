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

const mockMessagesData = [
  {
    id: '1',
    value: 'Wanna chat sex',
    senderId: '1a',
    photoURL: 'http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg'
  },
  {
    id: '2',
    value: 'Oh yeah',
    senderId: '1a',
    photoURL: 'http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg'
  },
  {
    id: '3',
    value: 'Big Dick',
    senderId: '1a',
    photoURL: 'http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg'
  },
  {
    id: '4',
    value: "I'm cumming",
    senderId: '1a',
    photoURL: 'http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg'
  },
  {
    id: '5',
    value: "Don't stop",
    senderId: '1a',
    photoURL: 'http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg'
  },
  {
    id: '6',
    value: "Fuck harder",
    senderId: '1a',
    photoURL: 'http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg'
  },
  {
    id: '7',
    value: "Doggy now",
    senderId: '1a',
    photoURL: 'http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg'
  },
  
]