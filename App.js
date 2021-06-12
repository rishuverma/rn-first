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
  const [modalVisibility, setModalVisibility] = useState(false);

  const addText = (inputTextFromComponent) => {
    if (inputTextFromComponent.trim() != "") {
      setTextList((textList) => [
        ...textList,
        {
          uniqueid: textList.length.toString(),
          value: inputTextFromComponent.trim(),
        },
      ]);
      setModalVisibility(false);
    }
  };
  const removeItemFromList = async (itemId) => {
    setTextList((textList) => {
      return textList.filter((eachItem) => eachItem.uniqueid != itemId);
    });
  };
  const onCancelPress = () => {
    setModalVisibility(false);
  };
  return (
    <View style={styles.root}>
      <Button
        title="Add an Item"
        onPress={() => {
          setModalVisibility(true);
        }}
      />
      <ItemInput
        onAddText={addText}
        modalVisibility={modalVisibility}
        onCancel={onCancelPress}
      />
      <FlatList
        keyExtractor={(item, index) => item.uniqueid}
        data={textList}
        renderItem={(itemData) => (
          <ItemList
            uniqueid={itemData.item.uniqueid}
            onDelete={removeItemFromList}
            value={itemData.item.value}
          />
        )}
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
