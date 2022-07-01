import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableHighlight } from 'react-native';
import useSignInGoogle from '../../hooks/useSignInGoogle';
import { AuthStackParamList } from '../../types/navigation';
import AppAds from './components/AppAds';
import mainTheme from '../../themes/mainTheme';

type LoginScreenNavigationProps = NativeStackScreenProps<AuthStackParamList, "Login">;
const LoginScreen = ({ route, navigation }: LoginScreenNavigationProps) => {
  const [signInGoogle, loading] = useSignInGoogle();
  const handlePress = () => {
    navigation.navigate("Signup");
  }
  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <AppAds />
      </View>
      <View style={styles.buttonGroupContainer}>
        <View>
          <TouchableHighlight
            onPress={handlePress}
            style={styles.signUpButton}
          >
            <Text style={styles.signUpButtonLabel}>Create an account</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.signInLabelContainer}>
          <Text style={styles.signInLabelItem}>Already have an account ?</Text>
          <TouchableHighlight
            onPress={signInGoogle}
            disabled={loading}
            style={styles.signInLabelItem}
          >
            <Text style={styles.signInButton}>
              Sign In
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50
  },
  signUpButton: {
    width: 300,
    height: 50,
    backgroundColor: mainTheme.PRIMARY_COLOR,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButtonLabel: {
    color: mainTheme.WHITE_COLOR,
  },
  buttonGroupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  signInLabelItem: {
    margin: 5,
  },
  signInButton: {
    color: mainTheme.PRIMARY_COLOR
  },
})