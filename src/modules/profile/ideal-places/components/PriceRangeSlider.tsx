import { View, Text } from 'react-native'
import React from 'react'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { mainTheme } from '../../../../themes/mainTheme';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';

const PriceRangeSlider = () => {
    const { userProfile, setPriceMin, setPriceMax } = useStore().profileStore;

    const multiSliderValuesChange = (vals: number[]) => {
        const [minVal, maxVal] = vals;
        setPriceMin(Math.floor(minVal));
        setPriceMax(Math.floor(maxVal));
    }
    return (
        <View>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'flex-end',
            }}>
                <Text>
                    Price Range
                </Text>
                <Text>
                    $ {userProfile.priceMin.toString()}
                </Text>
                <Text>
                    $ {userProfile.priceMax.toString()}
                </Text>
            </View>
            <MultiSlider
                values={[userProfile.priceMin, userProfile.priceMax]}
                sliderLength={300}
                onValuesChange={multiSliderValuesChange}
                min={0}
                max={500}
                markerStyle={{
                    backgroundColor: mainTheme.PRIMARY_COLOR,
                }}
                trackStyle={{
                    backgroundColor: mainTheme.LIGHT_GREY_COLOR,
                    height: 5,
                }}
                selectedStyle={{
                    backgroundColor: mainTheme.PRIMARY_COLOR,
                }}
            />
        </View>
    )
}

export default observer(PriceRangeSlider);
