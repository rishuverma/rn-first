import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ItemList = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onDelete.bind(this, props.uniqueid)}
      activeOpacity={0.7}
    >
      <View style={styles.listedItem}>
        <Text>{props.value}</Text>
      </View>
    </TouchableOpacity>
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
