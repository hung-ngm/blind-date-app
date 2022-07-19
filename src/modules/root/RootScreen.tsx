import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootScreenTabParamList } from '../../types/navigation';
import { mainTheme } from '../../themes/mainTheme';
import HomeTab from '../home/HomeTab';
import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import MatchTab from '../match/MatchTab';
import ChatTab from '../chat/ChatTab';
import UserProfileTab from '../profile/user-profile/UserProfileTab';

const Tab = createBottomTabNavigator<RootScreenTabParamList>();

const RootScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
            tabBarActiveTintColor: mainTheme.PRIMARY_COLOR,
            }}
        >
            <Tab.Screen
            name="Home"
            component={HomeTab}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cards" color={color} size={size} />
                ),
            }}
            />
            <Tab.Screen
            name="Match"
            component={MatchTab}
            options={{
                tabBarLabel: 'Match',
                tabBarIcon: ({ color, size }) => (
                <AntDesign name="heart" color={color} size={size} />
                ),
                // TODO: Add number of matches here
                // tabBarBadge: 3,
            }}
            />
            <Tab.Screen
            name="Chat"
            component={ChatTab}
            options={{
                tabBarLabel: 'Chat',
                tabBarIcon: ({ color, size }) => (
                <Entypo name="chat" color={color} size={size} />
                ),
            }}
            />
            <Tab.Screen
            name="Profile"
            component={UserProfileTab}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                <FontAwesome name="user" color={color} size={size} />
                ),
            }}
            />
        </Tab.Navigator>
    )
}

export default RootScreen