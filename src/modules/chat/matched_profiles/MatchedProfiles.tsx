import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProfileAvatar from '../shared/components/ProfileAvatar';
import ChatHeader from "../shared/components/ChatHeader";

const MatchedProfiles = () => {
  // TO DO: not hard code this
  const fakeImageUrl = "http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg";

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <ChatHeader fontSize={15} text="Matches"/>
      </View>

      <ScrollView
        contentContainerStyle={styles.horizontalProfilesListContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.matchedProfilesListContainer}>
          <ProfileAvatar 
            imageUrl={fakeImageUrl} 
            width={80}
            height={80}
            borderRadius={40}
            isBlurred={true}
          />
          <ProfileAvatar 
            imageUrl={fakeImageUrl} 
            width={80}
            height={80}
            borderRadius={40}
            isBlurred={true}
          />  
          <ProfileAvatar 
            imageUrl={fakeImageUrl} 
            width={80}
            height={80}
            borderRadius={40}
            isBlurred={true}
          />  
          <ProfileAvatar 
            imageUrl={fakeImageUrl} 
            width={80}
            height={80}
            borderRadius={40}
            isBlurred={true}
          />           
        </View>
      </ScrollView>

    </View>
  )
}

export default MatchedProfiles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    marginTop: 0,
  },
  headerContainer: {
    paddingLeft: 15,
    paddingTop: 5,
  },
  headerText: {
    paddingLeft: 15,
    fontSize: 15,
  },
  horizontalProfilesListContainer: {
    flex: 1,
    paddingTop: 15,
  },
  matchedProfilesListContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
})