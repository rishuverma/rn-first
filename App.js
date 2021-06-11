import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

import ItemList from "./components/ItemList";
import ItemInput from "./components/ItemInput";

export default function App() {
  const [textList, setTextList] = useState([]);

  const addText = (inputTextFromComponent) => {
    setTextList((textList) => [
      ...textList,
      { uniqueid: textList.length.toString(), value: inputTextFromComponent },
    ]);
  };
  return (
    <View style={styles.root}>
      <ItemInput onAddText={addText} />
      <FlatList
        keyExtractor={(item, index) => item.uniqueid}
        data={textList}
        renderItem={(itemData) => <ItemList value={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
