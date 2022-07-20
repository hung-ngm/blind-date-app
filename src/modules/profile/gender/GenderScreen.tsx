import React from 'react'
import useProfileNavigation from '../../navigation/hooks/useProfileNavigation'
import GenderSelector from './components/GenderSelector'

const GenderScreen = () => {
    const navigation = useProfileNavigation();
    const handleContinuePress = () => {
        navigation.navigate("Passion");
    }
    return (
        <GenderSelector handleContinuePress={handleContinuePress}/>
    )
}

export default GenderScreen
