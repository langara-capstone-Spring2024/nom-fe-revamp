import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      maxHeight: 200,
    },
    image: {
      width: "100%",
      height: "100%",
      
    },
  });

export default createStyles;
