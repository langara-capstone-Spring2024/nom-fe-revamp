import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const styles = StyleSheet.create({
  container: {},
  label: {
    marginBottom: 6.5,
    color: "#3c3c3c",
  },
  textInputFieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: t.Border.neutral,
  },
  textInputField: {
    flex: 1,
    flexGrow: 1,
    fontSize: 16,
    lineHeight: 21,
  },
  error: {
    marginTop: 8,
    paddingHorizontal: 8,
  },
});

export default styles;
