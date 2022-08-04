import React from 'react';
import AppNavigator from './components/AppNavigator';
import AuthNavigator from './components/AuthNavigator';
import { observer } from 'mobx-react-lite';
import { NavigationContainer } from '@react-navigation/native';
import { useStore } from '../stores/store';
import ProfileNavigator from './components/ProfileNavigator';
import { navigationRef } from './components/RootNavigation';

const Navigation = () => {
  const { user } = useStore().userStore;
  const isProfileCompleted = true;
  let Navigator: JSX.Element = <></>;
  if (user) {
    if (isProfileCompleted) {
      Navigator = <AppNavigator />
    }
    else {
      Navigator = <ProfileNavigator />
    }
  }
  else {
    Navigator = <AuthNavigator />
  }
  return (
    <NavigationContainer ref={navigationRef}>
      {Navigator}
    </NavigationContainer>
  )
  
}

export default observer(Navigation);