import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import useAuth from '../../hooks/useAuth';
import Header from './components/Header';
import Cards from './components/Cards';

const HomeTab = () => {
  const { signOut } = useAuth();
  const handlePress = () => {
    signOut();
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <Cards />
      <Button title='Log out' onPress={handlePress} />
    </View>
  )
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    paddingTop: 15,
  },
})