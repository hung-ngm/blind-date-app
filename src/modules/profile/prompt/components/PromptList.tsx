import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native'
import React, { useContext } from 'react'
import { mainTheme } from '../../../../themes/mainTheme'
import { ProfileContext } from '../../context/ProfileProvider'

interface Props {
    navigateToDetailScreen: () => void;
}
const ShowPromptList: React.FC<Props> = ({ navigateToDetailScreen }) => {
    const {
        setPrompt,
        setPromptAnswer,
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
    return (
        <View>
            <FlatList
                data={dummyPrompt}
                keyExtractor={(item, idx) => idx.toString()}
                renderItem={({item, index}) => (
                    <View style={showPromptListStyles.item}>
                        <TouchableHighlight onPress={() => {
                            setPrompt(item);
                            setPromptAnswer('');
                            navigateToDetailScreen();
                        }}
                        >
                            <Text style={showPromptListStyles.title}>{item}</Text>
                        </TouchableHighlight>
                    </View>
                )}
            />
        </View>
    )
}

const showPromptListStyles = StyleSheet.create({
    item: {
        width: '100%',
        height: 50,
        borderColor: mainTheme.LIGHT_GREY_COLOR,
        borderWidth: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        paddingLeft: 20,
    },
})

const PromptList: React.FC<Props> = ({ navigateToDetailScreen }) => {
    return (
        <View style={promptListStyles.container}>
            <View style={{
                flex: 1,
                marginHorizontal: 20,
            }}>
                <Text style={promptListStyles.title}>Prompts</Text>
            </View>
            <View style={{ flex: 5 }}>
                <ShowPromptList navigateToDetailScreen={navigateToDetailScreen}/>
            </View>
        </View>
    )
}
export default PromptList

const promptListStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
    },
    item: {
        flex: 1,
    },
    title: {
        fontSize: 34,
        padding: 5,
    },
})