import React from 'react'
import useAppNavigation from '../../navigation/hooks/useAppNavigation';
import IdealPlacesSelector from './components/IdealPlacesSelector';

const EditIdealPlacesScreen = () => {
    const navigation = useAppNavigation();
    const handleContinuePress = () => {
        navigation.navigate("ProfileEditMain");
    }

    return (
        <IdealPlacesSelector handleContinuePress={handleContinuePress}/>
    )
}

export default EditIdealPlacesScreen