import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {mainTheme} from '../../../themes/mainTheme';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Matches</Text>
        <Text style={styles.descriptionText}>This is a list of people who have liked you and your matches</Text>
        <View style={styles.lineContainer}>
        <View style={styles.line} />
        <View>
            <Text style = {styles.lineText}>Today</Text>
        </View>
        <View style={styles.line}/>
        </View>
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
    // alignItems: 'center',
    textAlign: 'center',
  },
  headerText: {
    fontSize: 27,
    color: mainTheme.PRIMARY_COLOR
  },
  descriptionText: {
    paddingTop: 10,
    fontSize: 14,
  },
  lineContainer: {
    paddingTop: 20,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  line: {
    flex: 1, 
    height: 1, 
    backgroundColor: mainTheme.PRIMARY_COLOR,
  },
  lineText: {
    width: 50, 
    textAlign: 'center',
    color: mainTheme.PRIMARY_COLOR
  }
})