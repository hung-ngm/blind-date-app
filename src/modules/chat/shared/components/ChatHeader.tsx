import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export type ChatHeaderProps = {
  text: string;
  fontSize: number;
  extraProps? : object;
}

const ChatHeader = (props: ChatHeaderProps) => {
  return (
    <View 
      style={{
        ...props.extraProps,
      }}
    >
      <Text style={{ fontSize: props.fontSize }}>{props.text}</Text>
    </View>
  )
}

export default ChatHeader;