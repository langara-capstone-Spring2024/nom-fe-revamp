import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    label: {
      marginBottom: 6.5,
      color: "#3c3c3c",
    },
    textAreaWrapper: {
      backgroundColor: "white",
      borderRadius: 8,
      borderColor: "#939393",
      borderWidth: 1,
      height: 80,
      width: "100%",
    },
    textAreaField: {
      fontFamily: "PublicSansRegular",
      fontSize: 16,
      lineHeight: 21,
      overflow: "hidden",
      textAlignVertical: "top",
      paddingHorizontal: 12,
      paddingTop: 10,
    },
  });

export default createStyles;
