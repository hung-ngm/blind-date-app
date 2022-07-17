import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import useAuth from '../../hooks/useAuth';
import { AppStackParamList } from '../../types/navigation';
import Header from './components/Header';
import Cards from './components/Cards';

type HomeScreenNavigationProps = NativeStackScreenProps<
  AppStackParamList,
  'Home'
>

const HomeScreen = ({ route, navigation }: HomeScreenNavigationProps) => {
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

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    paddingTop: 15,
  },
})