import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import ChatHeader from '../shared/components/ChatHeader';
import { SafeAreaView } from "react-native-safe-area-context";
import ChatPreview from './components/ChatPreview';


export const ChatList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ChatHeader text="Messages" fontSize={15} />
      </View>
      <FlatList
        data={mockData}
        renderItem={() => (
          <ChatPreview />
        )}
      />
      
    </View>
  ) 
}

export default ChatList

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingLeft: 15,
    paddingTop: 0,
  }
})

const mockData = [
  {
    id: 1,
    displayName: 'Kylie',
    age: 17,
    job: 'Model',
    photoURL: 'http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg',
    promptStart: 'My simple pleasure is',
    promptEnd: 'buscus',
  },
  {
    id: 2,
    displayName: 'Kylie',
    age: 17,
    job: 'Model',
    photoURL: 'http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg',
    promptStart: 'My simple pleasure is',
    promptEnd: 'buscus',
  },
  {
    id: 3,
    displayName: 'Kylie',
    age: 17,
    job: 'Model',
    photoURL: 'http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg',
    promptStart: 'My simple pleasure is',
    promptEnd: 'buscus',
  },
]