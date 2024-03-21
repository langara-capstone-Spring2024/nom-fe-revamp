import { StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";
import { theme as t } from "../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      width: "100%",
      height: "100%",
      borderRadius: 16,
    },
    radioContainer: {
      position: "absolute",
      top: 16,
      right: 16,
      width: 18,
      aspectRatio: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    radioOut: {
      position: "absolute",
      borderWidth: 3,
      width: 18,
      aspectRatio: 1,
      borderRadius: 1000,
    },
    radioIn: {
      position: "absolute",
      width: 8,
      aspectRatio: 1,
      borderRadius: 1000,
    },
  });

export default createStyles;
