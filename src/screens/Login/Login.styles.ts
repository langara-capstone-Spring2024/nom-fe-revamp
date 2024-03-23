import { StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";
import { theme as t } from "../../utils/Theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  formContainer: {
    position: "absolute",
    paddingHorizontal: 16,
    bottom: 0,
    paddingTop: 32,
    paddingBottom: 96,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    gap: 32,
    backgroundColor: t.Surface.default,
  },
});

export default styles;
