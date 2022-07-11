import React from 'react';
import { TouchableHighlight, Image } from 'react-native';

export type ProfileAvatarProps = {
  imageUrl: string;
  extraProps?: object;
}

const ProfileAvatar = (props: ProfileAvatarProps) => {
  return (
    <TouchableHighlight
      style={{
        ...props.extraProps,
        width: 80,
        height: 80,
        borderRadius: 40,
      }}
    >
      <Image 
        style={{
          height: 80,
          width: 80,
          borderRadius: 40,
        }}
        source={{ uri: props.imageUrl }} 
        
      />
    </TouchableHighlight>
  )
}

export default ProfileAvatar;
