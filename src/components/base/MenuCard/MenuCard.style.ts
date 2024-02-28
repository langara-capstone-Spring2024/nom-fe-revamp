import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";
import { View, Text, Image } from "react-native";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: "#fff",
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderColor: t.Border["default"],
    },

    leftComponent: {
      flex: 7,
      marginRight: 5,
    },

    namePrice: {
      marginBottom: 8,
    },

    rightComponent: {
      flex: 3,
      marginLeft: 5,
      alignItems: "flex-end",
    },

    imageContainer: {
      width: 100,
      height: 100,
      borderRadius: 8,
    },

    noImageContainer: {
      width: 100,
      height: 100,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: t.Border["default"],
      justifyContent: "center",
    },
  });

export default createStyles;
