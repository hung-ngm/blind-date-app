import React from 'react'
import useAppNavigation from '../../navigation/hooks/useAppNavigation';
import PromptSelector from './components/PromptSelector';

const EditPromptScreen = () => {
    const navigation = useAppNavigation();
    const handleContinuePress = () => {
        navigation.navigate('ProfileEditMain');
    }
    const handlePromptPress = () => {
        navigation.navigate('ProfileEditPromptList');
    }
    
    return (
        <PromptSelector
            handleContinuePress={handleContinuePress}
            handlePromptPress={handlePromptPress}
        />
    )
}

export default EditPromptScreen


