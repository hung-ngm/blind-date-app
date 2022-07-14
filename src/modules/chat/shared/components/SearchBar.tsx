import React from 'react';
import { StyleSheet, TextInput, View, Keyboard, Button, Text } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import { mainTheme } from '../../../../themes/mainTheme';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarClicked}>
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
        />
      </View>
    </View>
  )
}

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBarUnclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: mainTheme.LIGHT_GREY_COLOR,
    borderRadius: 15,
    alignItems: "center",
  },
  searchBarClicked: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: mainTheme.LIGHT_GREY_COLOR,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  inputContainer: {
    
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
  }
})