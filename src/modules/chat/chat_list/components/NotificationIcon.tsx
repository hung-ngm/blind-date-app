import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { mainTheme } from '../../../../themes/mainTheme';

export type NotificationIconProps = {
  numNotifications: number;
  extraProps?: object;
  width: number;
  height: number;
  borderRadius: number;
}

const NotificationIcon = (props: NotificationIconProps) => {
  const { numNotifications, extraProps, width, height, borderRadius } = props;

  return (
    <TouchableHighlight
      style={{
        ...extraProps,
        width: width,
        height: height,
        borderRadius: borderRadius,
        backgroundColor: mainTheme.PRIMARY_COLOR,
      }}
    >
      <Text
        style={{
          paddingLeft: 6,
          color: mainTheme.WHITE_COLOR,
        }}
      >
        {numNotifications}
      </Text>
    </TouchableHighlight>
  )
}

export default NotificationIcon;