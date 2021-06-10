import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [textList, setTextList] = useState([]);
  const textHandler = (enteredText) => {
    setInputText(enteredText);
  };

  const addText = () => {
    console.log(inputText);
    setTextList((textList) => [...textList, inputText]);
    setInputText("");
  };

  return (
    <View style={styles.root}>
      <View style={styles.parentView}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <TextInput
          placeholder="Enter your note!"
          style={styles.input}
          onChangeText={textHandler}
          value={inputText}
        />
        <Button title="ADD" style={{}} onPress={addText} />
      </View>
      <ScrollView>
        {textList.map((item, itemNum) => (
          <View key={itemNum} style={styles.listedItem}>
            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },

  parentView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    paddingRight: 10,
    width: "70%",
  },
  listedItem: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#ccc",
  },
});
