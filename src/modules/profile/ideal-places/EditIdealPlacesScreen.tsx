import React from 'react'
import { CategoryType } from '../../../types/profile';
import useAppNavigation from '../../navigation/hooks/useAppNavigation';
import { useStore } from '../../stores/store';
import IdealPlacesSelector from './components/IdealPlacesSelector';

const EditIdealPlacesScreen = () => {
    const { setCategories } = useStore().profileStore;
    const navigation = useAppNavigation();
    const handleContinuePress = (categories: CategoryType[]) => {
        setCategories(categories);
        navigation.navigate("ProfileEditMain");
    }

    return (
        <IdealPlacesSelector handleContinuePress={handleContinuePress}/>
    )
}

export default EditIdealPlacesScreen