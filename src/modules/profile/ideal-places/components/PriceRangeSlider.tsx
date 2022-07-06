import { View, Text } from 'react-native'
import React from 'react'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { mainTheme } from '../../../../themes/mainTheme';

type Props = {
    minPrice: number;
    setMinPrice: Function;
    maxPrice: number;
    setMaxPrice: Function;
}
const PriceRangeSlider = ({ minPrice, setMinPrice, maxPrice, setMaxPrice }: Props) => {
    const multiSliderValuesChange = (vals: number[]) => {
        const [minVal, maxVal] = vals;
        setMinPrice(Math.floor(minVal));
        setMaxPrice(Math.floor(maxVal));
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
                    $ {minPrice.toString()}
                </Text>
                <Text>
                    $ {maxPrice.toString()}
                </Text>
            </View>
            <MultiSlider
                values={[minPrice, maxPrice]}
                sliderLength={300}
                onValuesChange={multiSliderValuesChange}
                min={0}
                max={500}
                markerStyle={{
                    backgroundColor: mainTheme.PRIMARY_COLOR,
                }}
                trackStyle={{
                    backgroundColor: mainTheme.GREY_COLOR,
                }}
                selectedStyle={{
                    backgroundColor: mainTheme.PRIMARY_COLOR,
                }}
            />
        </View>
    )
}

export default PriceRangeSlider
