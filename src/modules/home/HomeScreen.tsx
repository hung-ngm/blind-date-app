import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import useAuth from '../../hooks/useAuth';

const HomeScreen = () => {
  const { signOut } = useAuth();
  const handlePress = () => {
    signOut();
  }
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title='Log out' onPress={handlePress} />
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})