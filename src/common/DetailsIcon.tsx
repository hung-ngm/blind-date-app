import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
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
    <TouchableHighlight
      onPress={onPress}
      style={{
        ...buttonExtraProps,
        width: width,
        height: height,
        borderRadius: borderRadius,
        backgroundColor: mainTheme.PRIMARY_COLOR
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
    </TouchableHighlight>
  )
}

export default DetailsIcon;