import React from 'react'
import useProfileNavigation from '../../navigation/hooks/useProfileNavigation';
import IdealPlacesSelector from './components/IdealPlacesSelector';

const IdealPlacesScreen = () => {
    const navigation = useProfileNavigation();
    const handleContinuePress = () => {
        navigation.navigate("EnableNoti");
    }

    return (
        <IdealPlacesSelector handleContinuePress={handleContinuePress}/>
    )
}

export default IdealPlacesScreen;
