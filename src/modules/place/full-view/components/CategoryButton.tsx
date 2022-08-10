import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { mainTheme } from '../../../../themes/mainTheme';

export type CategoryButtonProps = {
  category: string;
  extraStyles?: object;
}

const CategoryButton = ({ category, extraStyles }: CategoryButtonProps) => {
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
      <Text>{category}</Text>
    </TouchableHighlight>
  )
}

export default CategoryButton;