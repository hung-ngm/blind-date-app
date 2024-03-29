import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import Swiper from 'react-native-deck-swiper';
import { mainTheme } from '../../../themes/mainTheme';

interface SwipeButtonsProps {
  swipeRef: React.RefObject<Swiper<any>>;
}

const SwipeButtons: React.FC<SwipeButtonsProps> = ({ swipeRef }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.buttonDislike]}
        onPress={() => swipeRef.current?.swipeLeft()}
      >
        <Entypo name="cross" size={30} color={mainTheme.PRIMARY_COLOR} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonLike]}
        onPress={() => swipeRef.current?.swipeRight()}
      >
        <AntDesign name="heart" size={24} color={mainTheme.WHITE_COLOR} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonSuperLike]}
      >
        <AntDesign name="star" size={24} color={mainTheme.PURPLE_COLOR} />
      </TouchableOpacity>
    </View>
  )
}

export default SwipeButtons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 380,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    paddingHorizontal: 15,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    width: 64,
    height: 64,
  },
  buttonDislike: {
    backgroundColor: mainTheme.WHITE_COLOR,
  },
  buttonLike: {
    backgroundColor: mainTheme.PRIMARY_COLOR,
  },
  buttonSuperLike: {
    backgroundColor: mainTheme.WHITE_COLOR,
  },
})