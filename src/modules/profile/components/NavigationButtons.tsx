import { View } from 'react-native'
import React, { ReactElement } from 'react'

type Props = {
    leftComponent?: ReactElement;
    rightComponent?: ReactElement;
}
const NavigationButtons = (props: Props) => {
    return (
            <View style={{
                flex:1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <>
                    {props.leftComponent ? props.leftComponent : <View/>}
                    {props.rightComponent ? props.rightComponent : <View/>}
                </>
            </View>
        )
}

export default NavigationButtons