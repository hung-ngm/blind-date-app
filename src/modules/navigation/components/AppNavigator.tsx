import React from 'react';
import { mainTheme } from '../../../themes/mainTheme';
import { FontAwesome, MaterialCommunityIcons, Entypo, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import HomeScreen from '../../home/HomeScreen';
import MatchScreen from '../../match/MatchScreen';
import ChatScreen from '../../chat/ChatScreen';
import { AppStackParamList } from '../../../types/navigation';

const Tab = createBottomTabNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={(props) => {
        return {
          tabBarActiveTintColor: mainTheme.PRIMARY_COLOR,
          tabBarStyle: {
            display: 
              getFocusedRouteNameFromRoute(props.route) === "ChatMessages"
                ? "none" : "flex"
          }
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cards" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Match"
        component={MatchScreen}
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
        component={ChatScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="chat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
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

export default AppNavigator;