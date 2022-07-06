import { View, Text } from 'react-native'
import React from 'react'
import { Prompt } from '../../context/ProfileProvider';

type Props = {
    promptList: Prompt[];
    setPromptList: Function;
}
const PromptList = ({ promptList, setPromptList }: Props) => {
    return (
        <View style={{
            flex: 1,
        }}>

        </View>
    )
}

export default PromptList