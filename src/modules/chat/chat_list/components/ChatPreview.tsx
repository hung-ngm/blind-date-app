import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite';
import ProfileAvatar from '../../shared/components/ProfileAvatar';
import NotificationIcon from './NotificationIcon';
import { Match } from '../../../../types/match';
import { useStore } from '../../../stores/store';

interface ChatPreviewProps {
  match: Match;
  onPress: () => void;
}

const ChatPreview: React.FC<ChatPreviewProps> = ({ onPress, match }) => {
  const { user } = useStore().userStore;
  const otherUser = match.users[match.userMatched.find((id) => id !== user?.uid) as string]

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfileAvatar 
        imageUrl={otherUser.photoUrl} 
        width={80}
        height={80}
        borderRadius={40}
        extraProps={{ marginLeft: 16 }}
        isBlurred={true}
      /> 
      <View style={styles.chatPreviewTextContainer}>
        <View style={styles.firstRow}>
          <Text style={styles.displayName}>{otherUser.firstName} {otherUser.lastName}</Text>
          <Text style={styles.minutes}>23 min</Text>
        </View>
        <View style={styles.secondRow}>
          <Text style={styles.lastMessage}>{false ? "{lastMessage}" : "Typing"}</Text>
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

export default observer(ChatPreview);

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