import { StyleSheet, Dimensions } from "react-native";
import { theme as t } from "../../../utils/Theme";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 32,
    aspectRatio: 16 / 9,
    borderWidth: 2,
    borderColor: t.Border["brand-strong"],
    borderStyle: "dashed",
    borderRadius: 24,
    marginHorizontal: 16
  },
  item: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
    overflow: "hidden",
  },
  button: {
    backgroundColor: t.Surface.raised,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
    resizeMode: "cover",
  },
  spacer: {
    marginTop: 20
  }
});

export default styles;
