import React from 'react'
import useProfileNavigation from '../../navigation/hooks/useProfileNavigation'
import useRootNavigation from '../../navigation/hooks/useRootNavigation';
import { useStore } from '../../stores/store';
import PromptSelector from './components/PromptSelector'

const ProfileAnswerScreen = () => {
    const navigation = useProfileNavigation();
    const { updateUserProfile } = useStore().profileStore;
    const handleContinuePress = async () => {
        // TODO: Add some loading effects to prevent user from pressing button multiple times 
        // during asynchronous operation

        await updateUserProfile();
    }
    const handlePromptPress = () => {
        navigation.navigate('PromptList');
    }
    
    return (
        <PromptSelector
            handleContinuePress={handleContinuePress}
            handlePromptPress={handlePromptPress}
        />
    )
}

export default ProfileAnswerScreen
