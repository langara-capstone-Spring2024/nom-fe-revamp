import { StyleSheet, Dimensions } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";
const windowWidth = Dimensions.get("window").width;

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: windowWidth - 32,
      aspectRatio: 21 / 9,
      borderColor: t.Border["info-medium"],
      borderStyle: "dashed",
      borderRadius: 12,
      marginHorizontal: 16,
      borderWidth: 2,
      backgroundColor: "#fff",
      flexDirection: "row",
      // justifyContent: 'center',
      alignItems: "center",
    },
    imageContainer: {
      marginHorizontal: 16,
      marginVertical: 10,
      width: 124,
      aspectRatio: 1,
      justifyContent: "center",
      borderRadius: 12,
    },
    item: {
      width: "100%",
      height: "100%",
      borderRadius: 12,
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
      borderRadius: 12,
      resizeMode: "cover",
    },
    spacer: {
      marginTop: 20,
    },
  });

export default createStyles;
