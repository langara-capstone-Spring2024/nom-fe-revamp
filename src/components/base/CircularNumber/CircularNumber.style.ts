import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    circle: {
      width: 28,
      height: 28,
      borderRadius: 25,
      backgroundColor: t.Surface["brand-medium"],
      alignItems: "center",
      justifyContent: "center",
    },
    number: {
      fontSize: 20,
      fontFamily: "PublicSansMedium",
      color: "#FFF",
    },
  });

export default createStyles;
