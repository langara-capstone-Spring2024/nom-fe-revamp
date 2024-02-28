import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},
  label: {
    marginBottom: 8,
    color: "#3c3c3c",
  },
  textInputFieldContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "lightgray",
    borderWidth: 1,
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
