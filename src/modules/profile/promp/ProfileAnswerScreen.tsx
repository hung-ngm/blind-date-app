import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import NavigationButtons from '../components/NavigationButtons'
import PrimaryButton from '../../../common/PrimaryButton'
import { mainTheme } from '../../../themes/mainTheme'
import PromptList from './components/PromptList'
import { Prompt } from '../context/ProfileProvider'

const ProfileAnswerScreen = () => {
    const [promptList, setPromptList] = useState<Prompt[]>([]);
    const handleContinuePress = () => {

    }
    return (
        <View style={styles.container}>
            <View style={{
                flex: 1,
            }}>
                <NavigationButtons leftComponent={<Text>Back</Text>} />
            </View>
            <View style={{
                flex: 5,
                alignItems: 'center',
            }}>
                <View style={{
                    flex: 2,
                    ...styles.item,
                    ...styles.titleContainer
                }}
                >
                    <Text style={styles.title}>Your profile answer</Text>
                    <Text style={styles.description}>
                        Select a prompt and write your own answer
                    </Text>
                </View>
                <View style={{
                    flex: 2
                }}>
                    <PromptList
                        promptList={promptList}
                        setPromptList={setPromptList}
                    />
                </View>
                <View style={{
                    flex: 1,
                    marginTop: 20,
                }}>
                <PrimaryButton
                    text='Continue'
                    textColor={mainTheme.WHITE_COLOR}
                    onPress={handleContinuePress}
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
        fontSize: 14,
        padding: 5,
    },
})
