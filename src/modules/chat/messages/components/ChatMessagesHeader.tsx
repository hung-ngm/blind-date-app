import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileAvatar from '../../shared/components/ProfileAvatar';
import OnlineStatusIcon from '../components/OnlineStatusIcon';
import BackButton from '../../../../common/BackButton';
import useRootNavigation from '../../../navigation/hooks/useRootNavigation';
import { Profile } from '../../../../types/profile';

interface ChatMessagesHeaderProps {
  otherUser: Profile;
}

const ChatMessagesHeader: React.FC<ChatMessagesHeaderProps> = ({ otherUser }) => {
  const { firstName, lastName, photoUrl } = otherUser;
  const navigation = useRootNavigation();

  const onlineStatusFeature = true;

  return (
    <View style={styles.container}>
      <BackButton 
        extraProps={{
          paddingLeft: 20,
          marginLeft: 10,
        }}
        onPress={() => navigation.navigate('Chat')} 
      />

      <ProfileAvatar
        imageUrl={photoUrl}
        width={60}
        height={60}
        borderRadius={30}
        extraProps={{ 
          paddingTop: 5,
          marginLeft: 10 
        }}
        isBlurred={true}
      />
      <View style={styles.displayInfoContainer}>
        <Text style={styles.displayName}>{firstName} {lastName}</Text>
        {onlineStatusFeature && (
          <View style={styles.onlineStatusContainer}>
            <OnlineStatusIcon
              width={10}
              height={10}
              borderRadius={20}
              isOnline={true}
            />
            <Text style={styles.onlineStatus}>Online</Text>
          </View>
        )}
      </View>
    </View>
  )
}

export default ChatMessagesHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  displayInfoContainer: {
    marginTop: 2,
    paddingTop: 3,
    paddingLeft: 15,
  },
  displayName: {
    fontSize: 25,
  },
  onlineStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  onlineStatus: {
    paddingLeft: 5,
  }
})