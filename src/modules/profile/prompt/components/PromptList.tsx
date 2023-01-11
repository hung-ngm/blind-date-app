import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import { mainTheme } from '../../../../themes/mainTheme'
import { PROMPT_LIST } from '../../../../types/profile';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';
interface Props {
    navigateToDetailScreen: () => void;
}
const ShowPromptList: React.FC<Props> = observer(({ navigateToDetailScreen }) => {
    const { setPrompt, setPromptAnswer } = useStore().profileStore;

    return (
        <View>
            <FlatList
                data={PROMPT_LIST}
                keyExtractor={(item, idx) => idx.toString()} // Safe to use index as key here, as prompt list is fixed
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
});

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