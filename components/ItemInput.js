import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

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
    <Modal visible={props.modalVisibility} animationType="slide">
      <View style={styles.parentView}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <TextInput
          placeholder="Enter your note!"
          style={styles.input}
          onChangeText={textHandler}
          value={inputText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="ADD"
              // onPress={props.onAddText.bind(this, inputText)}
              // onPress={() => props.onAddText(inputText)}
              /*above are the two ways to handle sending the data to parent
	wanted to erase the data in the input box too.
	so made a function which does both and called it.
	this is first keyword for bind or call an anonymous function */
              onPress={sendAndErase}
            />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={props.onCancel} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "70%",
    marginBottom: 10,
    padding: 8,
  },
  parentView: {
    display: "flex",
    // flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "50%",
  },
  button: {
    width: "40%",
  },
});
export default ItemInput;
