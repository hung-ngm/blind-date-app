import React from 'react'
import useAppNavigation from '../../navigation/hooks/useAppNavigation';
import PromptList from './components/PromptList';

const EditPromptListScreen = () => {
    const navigation = useAppNavigation();
    const navigateToDetailScreen = () => {
        navigation.navigate("ProfileEditPromptDetail");
    }
    return (
        <PromptList navigateToDetailScreen={navigateToDetailScreen} />
    )
}

export default EditPromptListScreen