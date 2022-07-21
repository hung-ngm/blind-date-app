import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  TextInput,
  Button
} from 'react-native';
import { mainTheme } from '../../../../themes/mainTheme';

const ChatInput = () => {
  const [input, setInput] = useState("");

  const handleSend = (input: string) => {
    
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Your message..."
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={() => handleSend(input)}
      />
      <Button onPress={() => { handleSend(input)}} title="Send" color={mainTheme.PRIMARY_COLOR} />
    </View>
  )
}

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: mainTheme.LIGHT_GREY_COLOR,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginBottom: 8,
    marginHorizontal: 8,
  },
  input: {
    height: 40,
    fontSize: 15,
  }
})