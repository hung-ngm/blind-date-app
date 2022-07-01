import React from 'react';
import AppNavigator from './components/AppNavigator';
import AuthNavigator from './components/AuthNavigator';
import { observer } from 'mobx-react-lite';
import { NavigationContainer } from '@react-navigation/native';
import { useStore } from '../stores/store';
import mainTheme from '../../themes/mainTheme';

const Navigation = () => {
  const { user } = useStore().userStore;

  return (
    <NavigationContainer
      theme={mainTheme}
    >
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
  
}

export default observer(Navigation);