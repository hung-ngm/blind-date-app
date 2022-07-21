import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { mainTheme } from '../../../themes/mainTheme';

const NoCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>No more profiles</Text>
      </View>
    </View>
  )
}

export default NoCard;

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    position: 'relative',
    backgroundColor: mainTheme.WHITE_COLOR,
    width: 300,
    height: '65%',
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 10,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
})