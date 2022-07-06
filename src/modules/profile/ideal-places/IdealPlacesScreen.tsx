import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { mainTheme } from '../../../themes/mainTheme';
import NavigationButtons from '../components/NavigationButtons';
import PrimaryButton from '../../../common/PrimaryButton';
import RestaurantCategoriesList from './components/RestaurantCategoriesList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../../types/navigation';
import DistanceSlider from './components/DistanceSlider';
import PriceRangeSlider from './components/PriceRangeSlider';
import { ProfileContext } from '../context/ProfileProvider';

type IdealPlacesScreenNavigationProps = NativeStackScreenProps<
    AppStackParamList,
    'IdealPlace'
>
const IdealPlacesScreen = ({ navigation }: IdealPlacesScreenNavigationProps) => {
    const handleContinuePress = () => {
        navigation.navigate('EnableNoti');
    }

    const {
        numSelectedCategories
    } = useContext(ProfileContext);
    const isContinueButtonDisabled = numSelectedCategories === 0;
    
    return (
        <View style={styles.container}>
            <View style={{
                ...styles.item,
                flex: 1
            }}>
                <NavigationButtons leftComponent={<Text>Back</Text>} />
            </View>
            <View style={{
                ...styles.item,
                flex: 1,
                ...styles.titleContainer
            }}
            >
                <Text style={styles.title}>Your ideal places</Text>
                    <Text style={styles.description}>
                        Select your ideal restaurants so we can find an ideal place for you to meet
                    </Text>
            </View>
            <View style={{
                ...styles.item,
                flex: 5,
                justifyContent: 'flex-start',
                alignItems: 'center',
                margin: 5,
            }}>
                <View style={{
                    flex: 3,
                }}>
                    <DistanceSlider/>
                </View>
                <View style={{
                    flex: 3,
                }}>
                    <PriceRangeSlider/>
                </View>
                <View style={{
                    flex: 3,
                }}>
                    <RestaurantCategoriesList/>
                </View>
                <View style={{
                    flex: 1,
                    marginTop: 20,
                }}>
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
        margin: 10,
    },
    item: {
        padding: 10,
    },
    titleContainer: {
        padding: 20,
        marginVertical: 10,
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
