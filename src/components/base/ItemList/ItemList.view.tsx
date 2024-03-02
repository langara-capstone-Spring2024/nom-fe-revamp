import { View, Text, TouchableOpacity } from "react-native";
import { ItemListProps } from "./ItemList.props";
import createStyles from "./ItemList.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";
import { MaterialIcons } from "@expo/vector-icons";

const ItemList = (props: ItemListProps) => {
  const { title, subtitle } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Typography variant="body" alignment="left" color="info-medium">
            {title}
          </Typography>
          <Typography variant="body" alignment="left" color="medium">
            {subtitle}
          </Typography>
        </View>
        <MaterialIcons name="arrow-forward-ios" size={15} color="#939393" />
      </View>
    </TouchableOpacity>
  );
};

export default ItemList;
