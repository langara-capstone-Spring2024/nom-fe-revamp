import { StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    qrcode: {
      width: "50%",
      aspectRatio: 1,
    },
  });

export default createStyles;
