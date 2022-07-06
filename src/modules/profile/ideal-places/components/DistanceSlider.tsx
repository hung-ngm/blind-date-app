import { View, Text } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider'
import { mainTheme } from '../../../../themes/mainTheme'

type Props = {
    distance: number;
    setDistance: Function;
}
const DistanceSlider = ({ distance, setDistance }: Props) => {
    return (
        <View>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'flex-end',
            }}>
                <Text>
                    Distance
                </Text>
                <Text>
                    {distance} km
                </Text>
            </View>
            <Slider
                style={{width: 300, height: 20, flex: 2}}
                minimumValue={0}
                maximumValue={40}
                minimumTrackTintColor={mainTheme.PRIMARY_COLOR}
                maximumTrackTintColor={mainTheme.GREY_COLOR}
                thumbTintColor={mainTheme.PRIMARY_COLOR}
                tapToSeek={true}
                value={distance}
                onValueChange={(val) => setDistance(Math.floor(val))}
            />
        </View>
    )
}

export default DistanceSlider
