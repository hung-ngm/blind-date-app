import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProfileAvatar from '../../../common/ProfileAvatar';

const MatchedProfiles = () => {
  // TO DO: not hard code this
  const fakeImageUrl = "http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg";

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Matches</Text>
      
      <ScrollView
        contentContainerStyle={styles.horizontalProfilesListContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.matchedProfilesListContainer}>
          <ProfileAvatar imageUrl={fakeImageUrl} />
          <ProfileAvatar imageUrl={fakeImageUrl} />
          <ProfileAvatar imageUrl={fakeImageUrl} />
          <ProfileAvatar imageUrl={fakeImageUrl} />          
        </View>
      </ScrollView>

    </View>
  )
}

export default MatchedProfiles;

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    marginTop: 0,
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