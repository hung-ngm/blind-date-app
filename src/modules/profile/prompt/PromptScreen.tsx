import React, { useContext } from 'react'
import { ProfileContext } from '../context/ProfileProvider'
import useProfileNavigation from '../../navigation/hooks/useProfileNavigation'
import PromptSelector from './components/PromptSelector'

const ProfileAnswerScreen = () => {
    const navigation = useProfileNavigation();
    const {
        submitProfile,
    } = useContext(ProfileContext)
    const handleContinuePress = () => {
        // TODO: Add some loading effects to prevent user from pressing button multiple times 
        // during asynchronous operation
        submitProfile()
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
