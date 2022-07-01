import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useSignInGoogle from '../../hooks/useSignInGoogle';
import { AuthStackParamList } from '../../types/navigation';
import AppAds from './components/AppAds';

type LoginScreenNavigationProps = NativeStackScreenProps<AuthStackParamList, "Login">;
const LoginScreen = ({ route, navigation }: LoginScreenNavigationProps) => {
  const [signInGoogle, loading] = useSignInGoogle();
  const { colors } = useTheme();
  const handlePress = () => {
    navigation.navigate("Signup");
  }
  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <AppAds />
      </View>
      <View style={{flex: 1}}>
        <Button
          title="Create an account"
          color={colors.primary}
          onPress={handlePress}
        />
        <Button title="Login with Google" disabled={loading} onPress={signInGoogle} />
      </View>
    </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})