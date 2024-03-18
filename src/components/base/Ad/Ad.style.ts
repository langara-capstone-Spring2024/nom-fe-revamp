import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: { width: "100%", aspectRatio: 2, borderRadius: 24 },
    image: {
      borderRadius: 24,
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      objectFit: "cover",
    },
    typography: {
      position: "absolute",
    },
  });

export default createStyles;
