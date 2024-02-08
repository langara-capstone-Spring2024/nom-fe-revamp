import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: -4,
  },
  item: {
    width: "25%",
    height: "100%",
    borderRadius: 8,
    aspectRatio: 1,
    padding: 4,
  },
  button: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    objectFit: "cover",
  },
});

export default styles;
