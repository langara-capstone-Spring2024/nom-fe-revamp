import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
  },
  textInputFieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: t.Border.neutral,
    gap: 8,
  },
  textInputField: {
    flex: 1,
    flexGrow: 1,
    fontSize: 16,
  },
  error: {
    marginTop: 8,
    paddingHorizontal: 8,
  },
});

export default styles;
