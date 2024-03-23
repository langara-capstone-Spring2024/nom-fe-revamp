import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
  },
  dropdown: {
    backgroundColor: "white",
    borderColor: t.Border.neutral,
    borderWidth: 1,
    borderRadius: 8,
  },
  error: {
    marginTop: 8,
    paddingHorizontal: 8,
  },
});

export default styles;
