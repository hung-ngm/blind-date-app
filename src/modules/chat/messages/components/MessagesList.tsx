import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import MessageItem from './MessageItem';

const MessagesList = () => {
  return (
    <FlatList
      style={styles.container}
      data={mockMessagesData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MessageItem message={item} isSender={Number(item.id) % 2 == 0 ? true: false} />
      )}
      inverted={true}
      initialNumToRender={15}
      onEndReachedThreshold={0.5}
    />
  )
}

export default MessagesList;

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