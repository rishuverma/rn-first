import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const ItemInput = (props) => {
  const [inputText, setInputText] = useState("");

  const textHandler = async (enteredText) => {
    setInputText(enteredText);
  };
  const sendAndErase = async () => {
    await props.onAddText(inputText);
    setInputText("");
  };

  return (
    <View style={styles.parentView}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <TextInput
        placeholder="Enter your note!"
        style={styles.input}
        onChangeText={textHandler}
        value={inputText}
      />
      <Button
        title="ADD"
        style={{}}
        // onPress={props.onAddText.bind(this, inputText)}
        // onPress={() => props.onAddText(inputText)}
        /*above are the two ways to handle sending the data to parent
	wanted to erase the data in the input box too.
	so made a function which does both and called it.
	this is first keyword for bind or call an anonymous function */
        onPress={sendAndErase}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    paddingRight: 10,
    width: "70%",
  },
  parentView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default ItemInput;
