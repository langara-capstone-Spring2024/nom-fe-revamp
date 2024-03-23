import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 1,
  },
  item: {
    width: "100%",
    height: "100%",
    borderRadius: 10000,
    aspectRatio: 1,
  },
  button: {
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10000,
    objectFit: "cover",
  },
});

export default styles;
