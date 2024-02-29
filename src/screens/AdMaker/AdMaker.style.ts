import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";
import { theme as t } from "../../utils/Theme";
const { width } = Dimensions.get("window");

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      flex: 2,
      paddingTop: 16,
    },
    openModalContainer: {
      backgroundColor: "#0000004D",
      flex: 2,
      paddingTop: 16,
    },
    progressBar: {
      marginHorizontal: 32,
    },
    circleWrapper: {
      alignItems: "center",
      justifyContent: "center",
    },
    circle: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: "red",
      alignItems: "center",
      justifyContent: "center",
    },
    number: {
      fontSize: 20,
      color: "white",
    },
    wrapper: {
      marginHorizontal: 16,
    },
    contentContainer: {
      marginTop: 32,
      flexDirection: "row",
    },
    textContainer: {
      marginLeft: 12,
    },
    imagePicker: {
      marginTop: 36,
    },
    buttonContainer: {
      position: "absolute",
      bottom: 16,
      left: 0,
      right: 0,
      paddingHorizontal: 16,
    },
    colorContainer: {
      flex: 1,
      justifyContent: "center",
      alignContent: "center",
    },
    pickerHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 18,
    },
    pickerContainer: {
      alignSelf: "center",
      width,
      backgroundColor: "#fff",
      paddingTop: 5,
      paddingHorizontal: 36,
    },
    panelStyle: {
      borderRadius: 16,
      height: 172,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    sliderStyle: {
      borderRadius: 20,
      marginTop: 20,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    previewTxtContainer: {
      paddingTop: 20,
      marginTop: 20,
      borderTopWidth: 1,
      borderColor: "#bebdbe",
    },
    swatchesContainer: {
      paddingTop: 20,
      marginTop: 20,
      borderTopWidth: 1,
      borderColor: "#bebdbe",
      alignItems: "center",
      flexWrap: "nowrap",
      gap: 10,
    },
    swatchStyle: {
      borderRadius: 20,
      height: 30,
      width: 30,
      margin: 0,
      marginBottom: 0,
      marginHorizontal: 0,
      marginVertical: 0,
    },
    openButton: {
      width: "100%",
      borderRadius: 20,
      paddingHorizontal: 40,
      paddingVertical: 10,
      backgroundColor: "#fff",

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    closeButton: {
      position: "absolute",
      bottom: 10,
      borderRadius: 20,
      paddingHorizontal: 40,
      paddingVertical: 10,
      alignSelf: "center",
      backgroundColor: "#fff",

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    primaryAccentWrapper: {
      flexDirection: "row",
      gap: 8,
      marginLeft: -36,
      marginTop: 18,
    },
    primarySquare: {
      height: 24,
      width: 24,
      backgroundColor: t.Content["brand-medium"],
      borderRadius: 8,
    },
    accentSquare: {
      height: 24,
      width: 24,
      backgroundColor: t.Content["accent-medium"],
      borderRadius: 8,
    },
    editAdTextImageContainer: {
      width: width - 36,
      marginLeft: -36,
      marginHorizontal: 47,
      paddingVertical: 36,
      paddingHorizontal: 47,
      aspectRatio: 16 / 9,
      borderRadius: 24,

      shadowColor: "rgba(0, 0, 0, 0.15)",
      shadowOffset: { width: 16, height: 16 },
      shadowOpacity: 1,
      shadowRadius: 0,
      elevation: 16,
    },
    editAdTextImage: {
      borderRadius: 24,
      resizeMode: "cover",
      height: 134,
      width: 267,
    },
    edAdTextHeadlineWrapper: {
      width: width - 16,
      marginLeft: -36,
      paddingRight: 22,
      marginTop: 36,
    },
  });

export default createStyles;
