import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import { mainTheme } from '../themes/mainTheme';

export type BackButtonProps = {
  name: string;
  onPress: () => void;
}

const BackButton = ({ name, onPress } : BackButtonProps) => {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >
            <View style={{
                flexDirection: 'row',
            }}>
                <Text style={{
                    color: mainTheme.PRIMARY_COLOR,
                    fontSize: 18,
                }}>{name}</Text>
                <Icon name="left" size={25} color={mainTheme.PRIMARY_COLOR} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default BackButton;