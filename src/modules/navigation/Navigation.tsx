import React from 'react';
import AppNavigator from './components/AppNavigator';
import AuthNavigator from './components/AuthNavigator';
import { observer } from 'mobx-react-lite';
import { NavigationContainer } from '@react-navigation/native';
import { useStore } from '../stores/store';
import { navigationRef } from './components/RootNavigation';

const Navigation = () => {
  const { user } = useStore().userStore;

  return (
    <NavigationContainer ref={navigationRef}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
  
}

export default observer(Navigation);