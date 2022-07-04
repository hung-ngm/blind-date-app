import React from 'react'
import { Text, StyleSheet, TouchableHighlight } from 'react-native';
import { mainTheme } from '../themes/mainTheme';

interface onPressFunc {
    (): void;
}
export type PrimaryButtonProps = {
    text: string;
    textColor: string;
    backgroundColor?: string;
    onPress: onPressFunc;
    extraProps?: object;
    disabled? : boolean;
};
const PrimaryButton = (props: PrimaryButtonProps) => {
    return (
        <TouchableHighlight
            style={{
                ...props.extraProps,
                width: 300,
                height: 50,
                backgroundColor: props.backgroundColor || mainTheme.PRIMARY_COLOR,
                borderRadius: 15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={props.onPress}
        >
            <Text style={{
                color: props.textColor
            }}>
                {props.text}
            </Text>
        </TouchableHighlight>
    )
}

export default PrimaryButton;
