import { StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: "#fff",
    },

    menuCardContainer: {
      padding: 16,
    },
  });

export default createStyles;
