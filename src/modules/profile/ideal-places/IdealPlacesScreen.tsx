import React from 'react'
import { CategoryType } from '../../../types/profile';
import useProfileNavigation from '../../navigation/hooks/useProfileNavigation';
import { useStore } from '../../stores/store';
import IdealPlacesSelector from './components/IdealPlacesSelector';

const IdealPlacesScreen = () => {
    const { setCategories } = useStore().profileStore;
    const navigation = useProfileNavigation();
    const handleContinuePress = (categories: CategoryType[]) => {
        setCategories(categories);
        navigation.navigate("EnableNoti");
    }

    return (
        <IdealPlacesSelector handleContinuePress={handleContinuePress}/>
    )
}

export default IdealPlacesScreen;
