import { View, Text, StyleSheet, TouchableHighlight, ScrollView } from 'react-native'
import React, { useState } from 'react'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { mainTheme } from '../../../../themes/mainTheme';
import { observer } from 'mobx-react-lite';
import { PassionNames, Passions, PassionType } from '../../../../types/profile';
import { SelectedPassionsType } from './PassionSelector';

type PassionListProps = {
    selectedPassions: SelectedPassionsType;
    setSelectedPassions: Function;
}

const PassionList = ({ selectedPassions, setSelectedPassions }: PassionListProps) => {
    const PassionIcons =  {
        [Passions.ART]: <FontAwesomeIcon size={25} name="user" style={Passions.ART in selectedPassions ? styles.iconSelected : styles.iconDefault}/>,
        [Passions.PHOTOGRAPHY]: <FontAwesomeIcon size={25} name="user" style={Passions.PHOTOGRAPHY in selectedPassions ? styles.iconSelected : styles.iconDefault}/>,
        [Passions.POLITICS]: <FontAwesomeIcon size={25} name="user" style={Passions.POLITICS in selectedPassions ? styles.iconSelected : styles.iconDefault}/>,
        [Passions.COOKING]: <FontAwesomeIcon size={25} name="user" style={Passions.COOKING in selectedPassions ? styles.iconSelected : styles.iconDefault}/>,
        [Passions.RUN]: <FontAwesomeIcon size={25} name="user" style={Passions.RUN in selectedPassions ? styles.iconSelected : styles.iconDefault}/>,
        [Passions.TRAVELLING]: <FontAwesomeIcon size={25} name="user" style={Passions.TRAVELLING in selectedPassions ? styles.iconSelected : styles.iconDefault}/>,
        [Passions.MUSIC]: <FontAwesomeIcon size={25} name="user" style={Passions.MUSIC in selectedPassions ? styles.iconSelected : styles.iconDefault}/>,
        [Passions.PET]: <FontAwesomeIcon size={25} name="user" style={Passions.PET in selectedPassions ? styles.iconSelected : styles.iconDefault}/>,
        [Passions.EXERCISE]: <FontAwesomeIcon size={25} name="user" style={Passions.EXERCISE in selectedPassions ? styles.iconSelected : styles.iconDefault}/>,
        [Passions.DANCING]: <FontAwesomeIcon size={25} name="user" style={Passions.DANCING in selectedPassions ? styles.iconSelected : styles.iconDefault}/>,

    };

    const selectPassion = (passion: PassionType) => {
        if (passion in selectedPassions) {
            setSelectedPassions((prevSelectedPassions: SelectedPassionsType) => {
                delete prevSelectedPassions[passion];
                return {...prevSelectedPassions};
            })
        }
        else {
            setSelectedPassions((prevSelectedPassions: SelectedPassionsType) => ({
                ...prevSelectedPassions,
                [passion]: true,
            }))
        }
    }
    return (
        <ScrollView contentContainerStyle={styles.container} indicatorStyle='black'>
            {
                Object.keys(Passions).map((val: PassionType) => {
                    const containerStyle = val in selectedPassions ? styles.buttonSelected : styles.buttonDefault;
                    return (
                        <TouchableHighlight
                            style={{...containerStyle, ...styles.buttonContainer}}
                            key={val}
                            onPress={() => {                                
                                selectPassion(val)
                            }}
                        >
                            <View style={styles.buttonLabelContainer}>
                                <View style={{
                                    flex: 1
                                }}>
                                    {PassionIcons[val]}
                                </View>
                                <View style={{
                                    flex: 2,
                                }}>
                                    <Text style={val in selectedPassions ? styles.textSelected : styles.textDefault}>
                                        {PassionNames[val]}
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

export default PassionList;

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
