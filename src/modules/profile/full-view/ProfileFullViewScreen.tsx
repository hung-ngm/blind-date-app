import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../../../common/PrimaryButton';
import useRootNavigation from '../../navigation/hooks/useRootNavigation';
import { mainTheme } from '../../../themes/mainTheme';

const ProfileFullViewScreen = () => {
  const navigation = useRootNavigation();

  return (
    <View style={styles.container}>
      <Text>ProfileFullViewScreen</Text>
      <PrimaryButton
        text="Test button to Home"
        textColor={mainTheme.WHITE_COLOR}
        onPress={() => { navigation.navigate('Home') }}
      />
    </View>
  )
}

export default ProfileFullViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})