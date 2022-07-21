import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { mainTheme } from '../../../../themes/mainTheme';

export type OnlineStatusIconProps = {
  isOnline: boolean;
  width: number;
  height: number;
  borderRadius: number;
  extraProps?: object;
}

const OnlineStatusIcon = (props: OnlineStatusIconProps) => {
  const { isOnline, width, height, borderRadius, extraProps } = props;

  return (
    <TouchableHighlight
      style={{
        ...extraProps,
        width: width,
        height: height,
        borderRadius: borderRadius,
        backgroundColor: isOnline ? mainTheme.DEEP_PINK_COLOR : mainTheme.LIGHT_GREY_COLOR,
      }}
    >
      <Text>{}</Text>
    </TouchableHighlight> 
  )
}

export default OnlineStatusIcon;