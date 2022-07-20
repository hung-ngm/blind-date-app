import React from 'react'
import PromptList from './components/PromptList'
import useProfileNavigation from '../../navigation/hooks/useProfileNavigation'

const PromptListScreen = () => {
    const navigation = useProfileNavigation();
    const navigateToDetailScreen = () => {
        navigation.navigate("PromptDetail");
    }
    return (
        <PromptList navigateToDetailScreen={navigateToDetailScreen} />
    )
}

export default PromptListScreen
