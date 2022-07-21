import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { mainTheme } from '../../../themes/mainTheme';
import PrimaryButton from '../../../common/PrimaryButton';
import RestaurantCategoriesList from './components/RestaurantCategoriesList';
import DistanceSlider from './components/DistanceSlider';
import PriceRangeSlider from './components/PriceRangeSlider';
import { ProfileContext } from '../context/ProfileProvider';
import useProfileNavigation from '../../navigation/hooks/useProfileNavigation';

const IdealPlacesScreen = () => {
    const navigation = useProfileNavigation();
    const handleContinuePress = () => {
        navigation.navigate('EnableNoti');
    }
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

export default IdealPlacesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    titleContainer: {
        flex: 1,
        marginHorizontal: 50,
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
