import { StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";
import { theme as t } from "../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {},
    image: {
      width: "100%",
      aspectRatio: 1,
    },
  });

export default createStyles;
