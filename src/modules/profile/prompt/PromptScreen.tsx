import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React, { useContext } from 'react'
import PrimaryButton from '../../../common/PrimaryButton'
import { mainTheme } from '../../../themes/mainTheme'
import { ProfileContext } from '../context/ProfileProvider'
import useProfileNavigation from '../../navigation/hooks/useProfileNavigation'

const ProfileAnswerScreen = () => {
    const navigation = useProfileNavigation();
    const {
        prompt,
        promptAnswer,
        submitProfile
    } = useContext(ProfileContext)
    const handleContinuePress = () => {
        // TODO: Add some loading effects to prevent user from pressing button multiple times 
        // during asynchronous operation
        submitProfile()
    }
    const handlePromptPress = () => {
        navigation.navigate('PromptList');
    }
    const isPromptComplete = prompt && promptAnswer;
    
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
                                    {prompt}
                                </Text>
                                <Text style={{...styles.answerText, ...styles.promptAnswerItem}}>
                                    {promptAnswer}
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

export default ProfileAnswerScreen

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
        borderColor: mainTheme.GRAY_COLOR,
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
