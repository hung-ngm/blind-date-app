import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import { mainTheme } from '../../../../themes/mainTheme';
import PrimaryButton from '../../../../common/PrimaryButton';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';

interface PromptSelectorProps {
    handleContinuePress: () => void;
    handlePromptPress: () => void;
}
const PromptSelector: React.FC<PromptSelectorProps> = ({
    handleContinuePress,
    handlePromptPress,
}) => {
    const { userProfile } = useStore().profileStore;

    const isPromptComplete = userProfile.prompt && userProfile.promptAnswer;
    
    return (
        <View style={styles.container}>
            <View style={{
                flex: 5,
                alignItems: 'center',
            }}>
                <View style={{
                    flex: 2,
                    ...styles.titleContainer
                }}
                >
                    <Text style={styles.title}>Your profile answer</Text>
                    <Text style={styles.description}>
                        Select a prompt and write your own answer
                    </Text>
                </View>
                <TouchableHighlight
                    style={{
                        flex: 2,
                        ...styles.promptContainer
                    }}
                    onPress={handlePromptPress}
                >
                    {isPromptComplete
                        ? (
                            <>                          
                                <Text style={{...styles.promptText, ...styles.promptAnswerItem}}>
                                    {userProfile.prompt}
                                </Text>
                                <Text style={{...styles.answerText, ...styles.promptAnswerItem}}>
                                    {userProfile.promptAnswer}
                                </Text>
                            </>
                        )
                        : (
                            <Text>
                                Select a prompt and write your own answer
                            </Text>
                        )
                    }
                </TouchableHighlight>
                <View style={{
                    flex: 1,
                    marginTop: 20,
                }}>
                <PrimaryButton
                    text='Continue'
                    textColor={mainTheme.WHITE_COLOR}
                    onPress={handleContinuePress}
                    disabled={!isPromptComplete}
                />
                </View>
            </View>
        </View>
    )
}

export default observer(PromptSelector);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
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
        fontSize: 14,
        padding: 5,
    },
    promptContainer: {
        width: 300,
        borderWidth: 5,
        borderColor: mainTheme.DARK_GREY_COLOR,
        borderRadius: 15,
        paddingTop: 10,
        paddingLeft: 10,
    },
    promptText:{ 
        fontSize: 25,
    },
    answerText: {
        fontSize: 20,
    },
    promptAnswerItem: {
        paddingBottom: 10,
    }
})
