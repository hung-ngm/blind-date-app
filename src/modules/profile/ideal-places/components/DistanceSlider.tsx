import { View, Text } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider'
import { mainTheme } from '../../../../themes/mainTheme'
import { useStore } from '../../../stores/store'
import { observer } from 'mobx-react-lite'

const DistanceSlider = () => {
    const { userProfile, setDistance} = useStore().profileStore;
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
                    {userProfile.distance} km
                </Text>
            </View>
            <Slider
                style={{width: 300, height: 20, flex: 2}}
                minimumValue={0}
                maximumValue={40}
                minimumTrackTintColor={mainTheme.PRIMARY_COLOR}
                maximumTrackTintColor={mainTheme.LIGHT_GREY_COLOR}
                thumbTintColor={mainTheme.PRIMARY_COLOR}
                tapToSeek={true}
                value={userProfile.distance}
                onValueChange={(val) => setDistance(Math.floor(val))}
            />
        </View>
    )
}

export default observer(DistanceSlider);
