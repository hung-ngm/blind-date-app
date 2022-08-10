import React from 'react';
import { 
  StyleSheet, 
  View
} from 'react-native';
import PlaceItem from './PlaceItem';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';

const PlacesList = () => {
    const { user } = useStore().userStore;
    const { currentMatch } = useStore().matchStore;
    const { currentPlace } = useStore().placeStore; 

    console.log(currentPlace);
  
    if (!currentMatch || !user || !currentPlace) {
      return null;
    }
    const otherUser = currentMatch.users[currentMatch.userMatched.find((id) => id !== user.uid) as string];
    
    return (
      <View style={styles.container}>
        <PlaceItem
            place={currentPlace}
            isSender={currentPlace.invitedBy === user.uid}
            otherUser={otherUser}
        />
      </View>
    )
  }
  
  export default observer(PlacesList);
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
      paddingLeft: 0,
      marginLeft: 0,
    }
  })