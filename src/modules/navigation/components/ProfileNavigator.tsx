import { View, Text } from 'react-native'
import React from 'react'
import { useStore } from '../../stores/store';
import { ProfileStackParamList } from '../../../types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileDetailScreen from '../../profile/user-info/UserInfoScreen';
import GenderScreen from '../../profile/gender/GenderScreen';
import PassionScreen from '../../profile/passion/PassionScreen';
import IdealPlacesScreen from '../../profile/ideal-places/IdealPlacesScreen';
import EnableNotiScreen from '../../enable-noti/EnableNotiScreen';
import PromptScreen from '../../profile/prompt/PromptScreen';
import PromptListScreen from '../../profile/prompt/PromptListScreen';
import PromptDetailScreen from '../../profile/prompt/PromptDetailScreen';


const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
            <Stack.Screen name="Gender" component={GenderScreen} />
            <Stack.Screen name="Passion" component={PassionScreen} />
            <Stack.Screen name="IdealPlace" component={IdealPlacesScreen} />
            <Stack.Screen name="EnableNoti" component={EnableNotiScreen} />
            <Stack.Screen name="Prompt" component={PromptScreen} />
            <Stack.Screen name="PromptList" component={PromptListScreen} />
            <Stack.Screen name="PromptDetail" component={PromptDetailScreen} />
        </Stack.Navigator>
    )
}

export default ProfileNavigator