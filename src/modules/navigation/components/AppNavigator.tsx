import React from 'react';
import HomeScreen from '../../home/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../../types/navigation';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}


export default AppNavigator;