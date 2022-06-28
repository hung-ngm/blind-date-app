import React from 'react';
import AppNavigator from './components/AppNavigator';
import AuthNavigator from './components/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Navigation = () => {
  const user = false;

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
  
}

export default Navigation;