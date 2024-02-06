import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},
  label: {
    marginBottom: 8,
  },
  textInputFieldContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  textInputField: {
    flex: 1,
    flexGrow: 1,
  },
  error: {
    marginTop: 8,
    paddingHorizontal: 8,
  },
});

export default styles;
