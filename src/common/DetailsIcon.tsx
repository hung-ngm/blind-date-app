import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { mainTheme } from '../themes/mainTheme';

export type DetailsIconProps = {
  width: number;
  height: number;
  borderRadius: number;
  buttonExtraProps?: object;
  textExtraProps?: object;
  onPress: () => void;
}

const DetailsIcon = (props: DetailsIconProps) => {
  const { width, height, borderRadius, buttonExtraProps, textExtraProps, onPress  } = props;
  
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...buttonExtraProps,
        width: width,
        height: height,
        borderRadius: borderRadius,
        backgroundColor: mainTheme.PRIMARY_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          ...textExtraProps,
          color: mainTheme.WHITE_COLOR
        }}
      >
        i
      </Text>
    </TouchableOpacity>
  )
}

export default DetailsIcon;