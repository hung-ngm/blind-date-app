import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useContext } from 'react'
import { mainTheme } from '../../../themes/mainTheme'
import { ProfileContext } from '../context/ProfileProvider'

const PromptDetailScreen = () => {
  const {
    prompt,
    promptAnswer,
    setPromptAnswer,
  } = useContext(ProfileContext);
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="position"
        contentContainerStyle={styles.keyboardAvoid}
      >
          <>
            <View style={{
              flex: 5,
              ...styles.contentContainer
            }}>
              <View style={{
                flex: 1,
                ...styles.contentItem,
              }}>
                <Text style={styles.title}>Write Answer</Text>
              </View>
              <View style={{
                flex: 1,
                ...styles.contentItem,
                ...styles.promptPrompt,
              }}>
                <Text>{prompt}</Text>
              </View>
              <TextInput 
                style={{
                  flex: 3,
                  ...styles.promptAnswer,
                  ...styles.contentItem,
                }}
                placeholderTextColor={mainTheme.DARK_COLOR}
                placeholder='Enter your answer here'
                onChangeText={(ans) => setPromptAnswer(ans)}
                value={promptAnswer}
                multiline={true}
              />
            </View>
          </>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default PromptDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  keyboardAvoid: {
    flex: 1,
  },
  contentContainer: {
    marginHorizontal: 40,
  },
  contentItem: {
    marginVertical: 10,
  },
  title: {
    fontSize: 34,
    padding: 5,
  },
  prompt: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 5,
    borderColor: mainTheme.DARK_GREY_COLOR,
  },
  promptPrompt: {
    width: '100%',
    paddingTop: 10,
    paddingLeft: 10,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: mainTheme.DARK_GREY_COLOR,
  },
  promptAnswer: {
    width: '100%',
    paddingTop: 10,
    paddingLeft: 10,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: mainTheme.DARK_GREY_COLOR,
  },
})
