import { StyleSheet, View } from "react-native";
import React from "react";
import MenuCard from "../../components/base/MenuCard";

const MenuCardCollection = () => {
  return (
    <View>
      <MenuCard
        itemName="SandwishesSandwishesSandwishes"
        originalPrice="17.99"
        itemImage="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRkzwW5Ron058pqrtPbrrKkBl1AxHvUREdnpzaP1z_Ite7aZKry4Fkwjfb0CtaSMr7jFq4HNfzvajsL6lL18rU"
        itemDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elitdsasdsa adipiscing"
      />
      <MenuCard
        itemName="Salmon"
        originalPrice="15.98"
        itemImage=""
        itemDescription="Sed ut perspiciatis unde omnis istenatus error sit voluptatem usantium consectetur"
      />
    </View>
  );
};

export default MenuCardCollection;

const styles = StyleSheet.create({});
