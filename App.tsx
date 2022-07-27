import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navigation from './src/modules/navigation/Navigation';
import AuthProvider from './src/modules/auth/AuthProvider';
import { store, StoreContext } from './src/modules/stores/store';
import { ProfileProvider } from './src/modules/profile/context/ProfileProvider';

export default function App() {
  return (
    <StoreContext.Provider value={store}>
      <AuthProvider>
        <ProfileProvider>
          <Navigation />
          <StatusBar style="auto" />
        </ProfileProvider>
      </AuthProvider>
    </StoreContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

