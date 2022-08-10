import React from 'react';
import { TouchableHighlight, Image } from 'react-native';

export type ProfileAvatarProps = {
  imageUrl: string;
  extraProps?: object;
  width: number;
  height: number;
  borderRadius: number;
  isBlurred: boolean;
  onPress?: () => void;
}

const ProfileAvatar = (props: ProfileAvatarProps) => {
  const { extraProps, width, height, borderRadius, imageUrl, isBlurred, onPress } = props;

  return (
    <TouchableHighlight
      onPress={onPress}
      style={{
        ...extraProps,
        width: width,
        height: height,
        borderRadius: borderRadius,
      }}
    >
      <Image 
        style={{
          height: height,
          width: width,
          borderRadius: borderRadius,

        }}
        source={{ uri: imageUrl }} 
        blurRadius={isBlurred ? 15 : 0}
        
      />
    </TouchableHighlight>
  )
}

export default ProfileAvatar;
