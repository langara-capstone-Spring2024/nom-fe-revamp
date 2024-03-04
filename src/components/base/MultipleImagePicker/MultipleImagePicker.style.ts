import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  list: {
    marginTop: 8,
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 8,
    flex: 5,
  },
  button: {
    width: "100%",
    aspectRatio: 1.8,
    borderRadius: 16,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flex: 1,
    maxWidth: "20%",
    borderRadius: 8,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  background: {
    position: "absolute",
    borderRadius: 8,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(1, 1, 1, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

export default styles;
