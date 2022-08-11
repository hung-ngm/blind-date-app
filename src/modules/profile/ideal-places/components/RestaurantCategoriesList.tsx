import { View, Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { mainTheme } from '../../../../themes/mainTheme';
import { SelectedCategoriesType } from './IdealPlacesSelector';
import { Categories, CategoryType, CategoryNames } from '../../../../types/profile';

type RestaurantCategoriesListProps = {
    selectedCategories: SelectedCategoriesType;
    setSelectedCategories: Function;
}
const RestaurantCategoriesList = ({selectedCategories, setSelectedCategories}: RestaurantCategoriesListProps) => {
    const CategoryIcons =  {
        [Categories.BUFFET]: <FontAwesomeIcon size={25} name="user" style={Categories.BUFFET in selectedCategories ? styles.iconSelected : styles.iconDefault}/>,
        [Categories.CAFES]: <FontAwesomeIcon size={25} name="user" style={Categories.CAFES in selectedCategories ? styles.iconSelected : styles.iconDefault}/>,
        [Categories.BREAKFAST_BRUNCH]: <FontAwesomeIcon size={25} name="user" style={Categories.BREAKFAST_BRUNCH in selectedCategories ? styles.iconSelected : styles.iconDefault}/>,
        [Categories.THAI]: <FontAwesomeIcon size={25} name="user" style={Categories.THAI in selectedCategories ? styles.iconSelected : styles.iconDefault}/>,
        [Categories.JAPANESE]: <FontAwesomeIcon size={25} name="user" style={Categories.JAPANESE in selectedCategories ? styles.iconSelected : styles.iconDefault}/>,
        [Categories.NOODLES]: <FontAwesomeIcon size={25} name="user" style={Categories.NOODLES in selectedCategories ? styles.iconSelected : styles.iconDefault}/>,
        [Categories.PIZZA]: <FontAwesomeIcon size={25} name="user" style={Categories.PIZZA in selectedCategories ? styles.iconSelected : styles.iconDefault}/>,
        [Categories.SEAFOOD]: <FontAwesomeIcon size={25} name="user" style={Categories.SEAFOOD in selectedCategories ? styles.iconSelected : styles.iconDefault}/>,
        [Categories.VIETNAMESE]: <FontAwesomeIcon size={25} name="user" style={Categories.VIETNAMESE in selectedCategories ? styles.iconSelected : styles.iconDefault}/>,
        [Categories.CHINESE]: <FontAwesomeIcon size={25} name="user" style={Categories.CHINESE in selectedCategories ? styles.iconSelected : styles.iconDefault}/>,

    };

    const selectCategory = (category: CategoryType) => {
        if (category in selectedCategories) {
            setSelectedCategories((prevSelectedCategories: SelectedCategoriesType) => {
                delete prevSelectedCategories[category];
                return {...prevSelectedCategories};
            })
        }
        else {
            setSelectedCategories((prevSelectedCategories: SelectedCategoriesType) => ({
                ...prevSelectedCategories,
                [category]: true,
            }))
        }
    }
    return (
        <ScrollView contentContainerStyle={styles.container} indicatorStyle='black'>
            {
                Object.keys(Categories).map((val: CategoryType) => {
                    const containerStyle = val in selectedCategories ? styles.buttonSelected : styles.buttonDefault;
                    return (
                        <TouchableHighlight
                            style={{...containerStyle, ...styles.buttonContainer}}
                            key={val}
                            onPress={() => {                                
                                selectCategory(val)
                            }}
                        >
                            <View style={styles.buttonLabelContainer}>
                                <View style={{
                                    flex: 1
                                }}>
                                    {CategoryIcons[val]}
                                </View>
                                <View style={{
                                    flex: 2,
                                }}>
                                    <Text style={val in selectedCategories ? styles.textSelected : styles.textDefault}>
                                        {CategoryNames[val]}
                                    </Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    )
                })
            }
        </ScrollView>
    )
}

export default RestaurantCategoriesList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        margin: 10,
        flexWrap: 'wrap'
    },
    item: {
        padding: 10,
    },
    buttonContainer: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        width: 120,
        height: 45,
    },
    buttonLabelContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
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
    },
    iconSelected: {
        color: mainTheme.WHITE_COLOR,
    },
    iconDefault: {
        color: mainTheme.PRIMARY_COLOR,
    },
})
