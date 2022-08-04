import React from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  FlatList,
  ActivityIndicator
} from 'react-native';
import { observer } from 'mobx-react-lite';
import ChatHeader from '../shared/components/ChatHeader';
import ChatPreview from './components/ChatPreview';
import { useStore } from '../../stores/store';
import { mainTheme } from '../../../themes/mainTheme';

export const ChatList = () => {
  // TODO: Pull data from matchStore to render ChatList
  const { matches, matchesLimit, loadMore, hasMore, selectMatch } = useStore().matchStore;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ChatHeader text="Messages" fontSize={15} />
      </View>
      {matches.length > 0 ? (
        <FlatList
          data={matches}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ChatPreview
              match={item}
              onPress={() => {
                selectMatch(item.id)
              }} 
            />
          )}
          initialNumToRender={matchesLimit}
          onEndReachedThreshold={0.5}
          onEndReached={loadMore}
          ListFooterComponent={hasMore ? 
            <ActivityIndicator size="large" color={mainTheme.PRIMARY_COLOR} /> : null
          }

        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>There is no match at the moment 😢</Text>
        </View>
      )}
    </View>
  ) 
}

export default observer(ChatList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingLeft: 15,
    paddingTop: 0,
  },
  emptyContainer: {

  },
  emptyText: {

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