import React from 'react';
import { AppStackParamList } from '../../../types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { mainTheme } from '../../../themes/mainTheme';
import RootScreen from '../../root/RootScreen';
import ProfileEditMainScreen from '../../profile/edit-main/EditMainScreen';
import ProfileEditPromptScreen from '../../profile/prompt/EditPromptScreen';
import ProfileEditPassionScreen from '../../profile/passion/EditPassionScreen';
import ProfileEditIdealPlacesScreen from '../../profile/ideal-places/EditIdealPlacesScreen';
import ProfileEditGenderScreen from '../../profile/gender/EditGenderScreen';
import { useStore } from '../../stores/store';
import ChatMessagesScreen from '../../chat/messages/ChatMessagesScreen';
import ProfileEditPromptListScreen from '../../profile/prompt/EditPromptListScreen';
import ProfileEditPromptDetailScreen from '../../profile/prompt/EditPromptDetailScreen';
import SkipButton from '../../../common/SkipButton';
import useRootNavigation from '../hooks/useRootNavigation';
import ProfileFullViewScreen from '../../profile/full-view/ProfileFullViewScreen';
import useAppNavigation from '../hooks/useAppNavigation';
import PlaceFullViewScreen from '../../place/full-view/PlaceFullViewScreen';
import PlaceRecommendationScreen from '../../place/PlaceRecommendationScreen';
import GetMatchedScreen from '../../match/GetMatchedScreen';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  const { userProfile, updateUserProfile } = useStore().profileStore;
  const appNavigation = useAppNavigation();
  const rootNavigation = useRootNavigation();
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: mainTheme.PRIMARY_COLOR
    }}>
        <Stack.Screen name="Root" component={RootScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen
          name="ProfileEditMain"
          component={ProfileEditMainScreen}
          options={{
            title: userProfile?.firstName || "N/A",
            headerRight: () => (                        
              <SkipButton
                name="Done"
                onPress={() => {
                  // updateUserProfile();
                  // TODO: Add loading effect during asynchronous operation
                  rootNavigation.navigate("Profile");
                }}
              />
            ),
          }}
        />
        <Stack.Screen name="ProfileEditPrompt" component={ProfileEditPromptScreen} />
        <Stack.Screen name="ProfileEditPromptList" component={ProfileEditPromptListScreen} />
        <Stack.Screen
          name="ProfileEditPromptDetail"
          component={ProfileEditPromptDetailScreen}
          options={{
              headerRight: () => (                        
                  <SkipButton name="Done" onPress={() => appNavigation.navigate("ProfileEditMain")}  />
              ),
          }}
        />
        <Stack.Screen name="ProfileEditPassion" component={ProfileEditPassionScreen} />
        <Stack.Screen name="ProfileEditIdealPlaces" component={ProfileEditIdealPlacesScreen} />
        <Stack.Screen name="ProfileEditGender" component={ProfileEditGenderScreen} />
        <Stack.Screen name="ChatMessages" component={ChatMessagesScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="ProfileFullView" component={ProfileFullViewScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Places" component={PlaceRecommendationScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="GetMatched" component={GetMatchedScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="PlaceFullView" component={PlaceFullViewScreen} options={{
          headerShown: false,
        }} />
    </Stack.Navigator>
  )
} 

export default AppNavigator;