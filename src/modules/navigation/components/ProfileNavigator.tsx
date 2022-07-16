import React from 'react'
import { ProfileStackParamList } from '../../../types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileDetailScreen from '../../profile/profile-detail/ProfileDetailScreen';
import GenderScreen from '../../profile/gender/GenderScreen';
import PassionScreen from '../../profile/passion/PassionScreen';
import IdealPlacesScreen from '../../profile/ideal-places/IdealPlacesScreen';
import EnableNotiScreen from '../../enable-noti/EnableNotiScreen';
import PromptScreen from '../../profile/prompt/PromptScreen';
import PromptListScreen from '../../profile/prompt/PromptListScreen';
import PromptDetailScreen from '../../profile/prompt/PromptDetailScreen';
import { mainTheme } from '../../../themes/mainTheme';
import SkipButton from '../../enable-noti/components/SkipButton';
import DoneButton from '../../profile/prompt/components/DoneButton';


const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: mainTheme.PRIMARY_COLOR
        }}>
            <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
            <Stack.Screen name="Gender" component={GenderScreen} />
            <Stack.Screen name="Passion" component={PassionScreen} />
            <Stack.Screen name="IdealPlace" component={IdealPlacesScreen} />
            <Stack.Screen
                name="EnableNoti"
                component={EnableNotiScreen}
                options={{
                    headerRight: () => (                        
                        <SkipButton />
                    ),
                }}
            />
            <Stack.Screen name="Prompt" component={PromptScreen} />
            <Stack.Screen name="PromptList" component={PromptListScreen} />
            <Stack.Screen
                name="PromptDetail"
                component={PromptDetailScreen}
                options={{
                    headerRight: () => (                        
                        <DoneButton />
                    ),
                }}
            />
        </Stack.Navigator>
    )
}

export default ProfileNavigator