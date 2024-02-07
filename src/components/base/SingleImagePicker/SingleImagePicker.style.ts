import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 1,
  },
  item: {
    width: "100%",
    height: "100%",
    aspectRatio: 1,
    borderRadius: 10000,
  },
  button: {
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 10000,
  },
});

export default styles;
