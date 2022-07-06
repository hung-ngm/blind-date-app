import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { ProfileContext, Prompt } from '../../context/ProfileProvider';

const PromptList = () => {
    const { promptList, setPromptList } = useContext(ProfileContext);
    return (
        <View style={{
            flex: 1,
        }}>

        </View>
    )
}

export default PromptList