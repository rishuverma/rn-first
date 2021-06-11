import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ItemList = (props) => {
  return (
    <View style={styles.listedItem}>
      <Text>{props.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listedItem: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#ccc",
  },
});
export default ItemList;
