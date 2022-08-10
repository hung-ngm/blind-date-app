import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { mainTheme } from '../../../themes/mainTheme';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Find Your Places</Text>
        <Text style={styles.descriptionText}>
            Choose at least 3 from 5 places for us to arrange a blind date
        </Text>
      </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  headerText: {
    fontSize: 27,
    color: mainTheme.PRIMARY_COLOR
  },
  descriptionText: {
    paddingTop: 10,
    fontSize: 16,
  }
})