import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24,
    borderColor: "#9563FF",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "white",
    marginRight: 5,
  },
  checkedCheckbox: {
    position: "relative",
    backgroundColor: "#9563FF",
  },
  label: {
    marginLeft: 8,
  },
});

export default styles;
