import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ProfileAvatar from '../../shared/components/ProfileAvatar';
import NotificationIcon from './NotificationIcon';

const ChatPreview = () => {
  // TODO: Change this
  const fakeUrl = "http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg";

  return (
    <TouchableOpacity style={styles.container}>
      <ProfileAvatar 
        imageUrl={fakeUrl} 
        width={80}
        height={80}
        borderRadius={40}
        extraProps={{ marginLeft: 16 }}
        isBlurred={true}
      /> 
      <View style={styles.chatPreviewTextContainer}>
        <View style={styles.firstRow}>
          <Text style={styles.displayName}>Kylie</Text>
          <Text style={styles.minutes}>23 min</Text>
        </View>
        <View style={styles.secondRow}>
          <Text style={styles.lastMessage}>Typing..</Text>
          <NotificationIcon
            numNotifications={1}
            width={20}
            height={20}
            borderRadius={10}
            extraProps={{
              marginLeft: 174,
            }}
          />
        </View>
        
        
      </View>
      

    </TouchableOpacity>
  )
}

export default ChatPreview;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  chatPreviewTextContainer: {
    marginTop: 0,
    paddingTop: 0,
    paddingLeft: 15,
  },
  firstRow: {
    flexDirection: "row",
  },
  displayName: {

  },
  minutes: {
    marginRight: 0,
    marginLeft: 175,
  },
  secondRow: {
    flexDirection: "row",
  },
  lastMessage: {
    fontWeight: 'bold',
  },
  notificationIcon: {

  }

})