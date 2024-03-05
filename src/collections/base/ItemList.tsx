import { StyleSheet, View } from "react-native";
import React from "react";
import ItemList from "../../components/base/ItemList";

const ItemListCollection = () => {
  return (
    <View>
      <ItemList title="Add Items" subtitle="Add or edit items" />
    </View>
  );
};

export default ItemListCollection;

const styles = StyleSheet.create({});
