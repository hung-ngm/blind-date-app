import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PromptList from './components/PromptList'

const PromptListScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{
                flex: 1,
                marginHorizontal: 20,
            }}>
                <Text style={styles.title}>Prompts</Text>
            </View>
            <View style={{ flex: 5 }}>
                <PromptList />
            </View>
        </View>
    )
}

export default PromptListScreen

const styles = StyleSheet.create({
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
