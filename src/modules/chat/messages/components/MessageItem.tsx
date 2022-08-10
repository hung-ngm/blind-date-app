import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Message } from '../../../../types/message';
import { Profile } from '../../../../types/profile';
import { mainTheme } from '../../../../themes/mainTheme';
import ProfileAvatar from '../../shared/components/ProfileAvatar';

interface MessageItemProps {
  message: Message;
  isSender: boolean;
  otherUser: Profile
}

const MessageItem: React.FC<MessageItemProps> = ({ message, isSender, otherUser }) => {
  const { value } = message;
  const { photoUrl } = otherUser;

  return (
    <View style={[styles.container, isSender ? styles.sender : styles.receiver]}>
      {!isSender && 
        <ProfileAvatar 
          imageUrl={photoUrl}
          width={48}
          height={48}
          borderRadius={24}
          isBlurred={true}
          extraProps={{
            top: 0,
            left: -56,
            position: "absolute", 
          }}
        />
      }
      <Text>{value}</Text>
    </View>
  )
}

export default MessageItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 12,
    marginVertical: 8,
    alignSelf: "flex-start",
  },
  sender: {
    backgroundColor: mainTheme.LIGHT_GREY_COLOR,
    borderTopRightRadius: 0,
    marginLeft: "auto",
  },
  receiver: {
    position: "relative",
    backgroundColor: mainTheme.LIGHT_PINK_COLOR,
    borderTopLeftRadius: 0,
    marginLeft: 56,
  },
})