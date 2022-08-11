import { observer } from 'mobx-react-lite';
import React from 'react'
import useProfileNavigation from '../../navigation/hooks/useProfileNavigation'
import { useStore } from '../../stores/store';
import GenderSelector from './components/GenderSelector'

const GenderScreen = () => {
    const { userProfile, setGender} = useStore().profileStore;
    const navigation = useProfileNavigation();
    const handleContinuePress = () => {
        navigation.navigate("Passion");
    }
    return (
        <GenderSelector getGender={() => userProfile.gender} setGender={setGender} handleContinuePress={handleContinuePress}/>
    )
}

export default observer(GenderScreen);
