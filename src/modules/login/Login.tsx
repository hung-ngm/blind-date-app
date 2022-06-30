import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useSignInGoogle from '../../hooks/useSignInGoogle';

const Login = () => {
  const [signInGoogle, loading] = useSignInGoogle();

  return (
    <View style={styles.container}>
      <Button title="Login" disabled={loading} onPress={signInGoogle} />
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})