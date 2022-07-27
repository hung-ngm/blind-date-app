import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';
import { mainTheme } from '../../../../themes/mainTheme';

export type PassionButtonProps = {
  passion: string;
  extraStyles?: object;
}

const PassionButton = ({ passion, extraStyles }: PassionButtonProps) => {
  return (
    <TouchableHighlight
      style={{
        ...extraStyles,
        width: 80,
        height: 30,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: mainTheme.PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>{passion}</Text>
    </TouchableHighlight>
  )
}

export default PassionButton;