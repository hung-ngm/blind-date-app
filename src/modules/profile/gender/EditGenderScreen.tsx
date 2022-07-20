import React from 'react'
import useAppNavigation from '../../navigation/hooks/useAppNavigation'
import GenderSelector from './components/GenderSelector';

const EditGenderScreen = () => {
    const navigation = useAppNavigation();
    const handleContinuePress = () => {
        navigation.navigate("ProfileEditMain")
    }
    return (
        <GenderSelector handleContinuePress={handleContinuePress}/>
    )
}

export default EditGenderScreen