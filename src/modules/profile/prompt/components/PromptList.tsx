import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native'
import React, { useContext } from 'react'
import { mainTheme } from '../../../../themes/mainTheme'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { AppStackParamList } from '../../../../types/navigation'
import { ProfileContext } from '../../context/ProfileProvider'

const PromptList = () => {
    const {
        setPrompt,
    } = useContext(ProfileContext);

    const dummyPrompt = [
        'My simple pleasure is',
        'A fact I love is',
        'I discovered that',
        'My strength is',
        'Typical Saturday',
        'Typical Sunday',
        'Typical Sunday 1',
        'Typical Sunday 2',
        'Typical Sunday 3',
        'Typical Sunday 4',
        'Typical Sunday 5',
    ]
    const navigation: NavigationProp<AppStackParamList> = useNavigation();
    return (
        <View>
            <FlatList
                data={dummyPrompt}
                keyExtractor={(item, idx) => idx.toString()}
                renderItem={({item, index}) => (
                    <View style={styles.item}>
                        <TouchableHighlight onPress={() => {
                            setPrompt({
                                prompt: item,
                                answer: '',
                            })
                            navigation.navigate('PromptDetail')
                        }}
                        >
                            <Text style={styles.title}>{item}</Text>
                        </TouchableHighlight>
                    </View>
                )}
            />
        </View>
    )
}

export default PromptList

const styles = StyleSheet.create({
    item: {
        width: '100%',
        height: 50,
        borderColor: mainTheme.GRAY_COLOR,
        borderWidth: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        paddingLeft: 20,
    },
})
