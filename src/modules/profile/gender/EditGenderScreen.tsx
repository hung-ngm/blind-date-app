import { observer } from 'mobx-react-lite';
import React from 'react'
import useAppNavigation from '../../navigation/hooks/useAppNavigation'
import { useStore } from '../../stores/store';
import GenderSelector from './components/GenderSelector';

const EditGenderScreen = () => {
    const { userProfile, setGender} = useStore().profileStore;
    const navigation = useAppNavigation();
    const handleContinuePress = () => {
        navigation.navigate("ProfileEditMain")
    }
    return (
        <GenderSelector getGender={() => userProfile.gender} setGender={setGender} handleContinuePress={handleContinuePress}/>
    )
}

export default observer(EditGenderScreen);