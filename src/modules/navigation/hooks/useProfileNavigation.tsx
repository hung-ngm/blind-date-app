import { View, Text } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { ProfileStackParamList } from '../../../types/navigation'

const useProfileNavigation = () => {
    const navigation = useNavigation<NavigationProp<ProfileStackParamList>>();
    return navigation;
}

export default useProfileNavigation