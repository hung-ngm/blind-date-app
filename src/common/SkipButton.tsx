import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import { mainTheme } from '../themes/mainTheme';

export type SkipButtonProps = {
  name?: string;
  onPress: () => void;
  extraProps?: object;
}

const SkipButton = ({ name, onPress, extraProps } : SkipButtonProps) => {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
            style={{
              ...extraProps,
            }}
        >
            <View style={{
                flexDirection: 'row',
            }}>
                <Text style={{
                    color: mainTheme.PRIMARY_COLOR,
                    fontSize: 18,
                }}>{name}</Text>
                <Icon name="right" size={25} color={mainTheme.PRIMARY_COLOR} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SkipButton