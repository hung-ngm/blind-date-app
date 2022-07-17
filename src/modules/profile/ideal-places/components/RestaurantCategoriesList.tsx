import { View, Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native'
import React, { useContext } from 'react'
import { mainTheme } from '../../../../themes/mainTheme';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Categories, Category, ProfileContext, selectCategoryFuncType, SelectedCategoryType } from '../../context/ProfileProvider';

const dummyList: Category[] = [
    {
        iconName: 'coffee',
        name: 'Coffee',
        type: Categories.Coffee,
    },
    {
        iconName: 'glass',
        name: 'Desserts',
        type: Categories.Desserts,
    },
    {
        iconName: 'cube',
        name: 'Chicken',
        type: Categories.Chicken,
    },
    {
        iconName: 'taxi',
        name: 'Pizza',
        type: Categories.Pizza,
    },
]

const RestaurantCategoriesList = () => {
    const {
        selectedCategories,
        selectCategory
    } = useContext(ProfileContext);
    return (
        <ScrollView contentContainerStyle={styles.container} indicatorStyle='black'>
            {
                dummyList.map((val: Category, idx: number) => {
                    const containerStyle = val.type in selectedCategories ? styles.buttonSelected : styles.buttonDefault;
                    return (
                        <TouchableHighlight
                            style={{...containerStyle, ...styles.buttonContainer}}
                            key={idx}
                            onPress={() => {                                
                                selectCategory(val.type)
                            }}
                        >
                            <View style={styles.buttonLabelContainer}>
                                <View style={{
                                    flex: 1
                                }}>
                                    <Icon size={25} name={val.iconName} style={val.type in selectedCategories ? styles.iconSelected : styles.iconDefault}/>
                                </View>
                                <View style={{
                                    flex: 2,
                                }}>
                                    <Text style={val.type in selectedCategories ? styles.textSelected : styles.textDefault}>
                                        {val.name}
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
        width: 150,
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
