import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 8,
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 8,
  },
  button: {
    width: "100%",
    aspectRatio: 1.8,
    borderRadius: 16,
    backgroundColor: t.Surface.raised,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  error: {
    marginTop: 8,
    paddingHorizontal: 8,
  },
});

export default styles;
