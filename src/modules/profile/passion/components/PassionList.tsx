import { View, Text, StyleSheet, TouchableHighlight, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { mainTheme } from '../../../../themes/mainTheme';
import { Passion, Passions, ProfileContext } from '../../context/ProfileProvider';

const dummyList: Passion[] = [
    {
        iconName: 'camera',
        name: 'Photography',
        type: Passions.Photography,
    },
    {
        iconName: 'shopping-cart',
        name: 'Shopping',
        type: Passions.Shopping,
    },
    {
        iconName: 'microphone',
        name: 'Karaoke',
        type: Passions.Karaoke,
    },
    {
        iconName: 'heart',
        name: 'Yoga',
        type: Passions.Yoga,
    },
    {
        iconName: 'shopping-cart',
        name: 'Cooking',
        type: Passions.Cooking,
    },
    {
        iconName: 'shopping-cart',
        name: 'Tennis',
        type: Passions.Tennis,
    },
    {
        iconName: 'shopping-cart',
        name: 'Run',
        type: Passions.Run,
    },
    {
        iconName: 'shopping-cart',
        name: 'Swimming',
        type: Passions.Swimming,
    },
    {
        iconName: 'shopping-cart',
        name: 'Art',
        type: Passions.Art,
    },
    {
        iconName: 'shopping-cart',
        name: 'Travelling',
        type: Passions.Travelling,
    },
    {
        iconName: 'shopping-cart',
        name: 'Extreme',
        type: Passions.Extreme,
    },
    {
        iconName: 'shopping-cart',
        name: 'Music',
        type: Passions.Music,
    },

    {
        iconName: 'shopping-cart',
        name: 'Drink',
        type: Passions.Drink,
    },
    {
        iconName: 'shopping-cart',
        name: 'Video games',
        type: Passions.Video_games,
    },
]
const PassionList = () => {
    const {
        selectedPassions,
        selectPassion,
    } = useContext(ProfileContext);
    return (
        <ScrollView contentContainerStyle={styles.container} indicatorStyle='black'>
            {
                dummyList.map((val: Passion, idx: number) => {
                    const containerStyle = val.type in selectedPassions ? styles.buttonSelected : styles.buttonDefault;
                    return (
                        <TouchableHighlight
                            style={{...containerStyle, ...styles.buttonContainer}}
                            key={idx}
                            onPress={() => {                                
                                selectPassion(val.type)
                            }}
                        >
                            <View style={styles.buttonLabelContainer}>
                                <View style={{
                                    flex: 1
                                }}>
                                    <Icon size={25} name={val.iconName} style={val.type in selectedPassions ? styles.iconSelected : styles.iconDefault}/>
                                </View>
                                <View style={{
                                    flex: 2,
                                }}>
                                    <Text style={val.type in selectedPassions ? styles.textSelected : styles.textDefault}>
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

export default PassionList

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
