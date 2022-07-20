import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { ProfileContext } from '../../context/ProfileProvider';
import DistanceSlider from './DistanceSlider';
import PriceRangeSlider from './PriceRangeSlider';
import RestaurantCategoriesList from './RestaurantCategoriesList';
import PrimaryButton from '../../../../common/PrimaryButton';
import { mainTheme } from '../../../../themes/mainTheme';
import CitySelector from './CitySelector';


interface IdealPlacesSelectorProps {
    handleContinuePress: () => void;
}
const IdealPlacesSelector: React.FC<IdealPlacesSelectorProps> = ({ handleContinuePress }) => {
    const {
        numSelectedCategories
    } = useContext(ProfileContext);
    const isContinueButtonDisabled = numSelectedCategories === 0;

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}
            >
                <Text style={styles.title}>Your ideal places</Text>
                    <Text style={styles.description}>
                        Select your ideal restaurants so we can find an ideal place for you to meet
                    </Text>
            </View>
            <View style={{
                flex: 5,
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}>
                <View style={{ flex: 2 }}>
                    <CitySelector/>
                </View>
                <View style={{ flex: 2 }}>
                    <DistanceSlider/>
                </View>
                <View style={{flex: 2 }}>
                    <PriceRangeSlider/>
                </View>
                <View style={{ flex: 3 }}>
                    <RestaurantCategoriesList/>
                </View>
                <View style={{ flex: 2 }}>
                    <PrimaryButton
                        text='Continue'
                        onPress={handleContinuePress}
                        extraTouchableHighlightProps={{
                            disabled: isContinueButtonDisabled
                        }}
                        extraStyles={isContinueButtonDisabled ? {
                            opacity: '0.5'
                        } : {}}
                    />
                </View>
            </View>
        </View>
    )
}

export default IdealPlacesSelector


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 40,
    },
    titleContainer: {
        flex: 1,
        marginBottom: 30,
    },
    title: {
        fontSize: 34,
        padding: 5,
    },
    description: {
        fontSize: 18,
        padding: 5,
    },
    buttonSelected: {
        backgroundColor: mainTheme.PRIMARY_COLOR,
    },
    buttonDefault: {
        backgroundColor: mainTheme.WHITE_COLOR,
    },
    textSelected: {
        color: mainTheme.WHITE_COLOR,
    },
    textDefault: {
        color: mainTheme.DARK_COLOR,
    }
})
