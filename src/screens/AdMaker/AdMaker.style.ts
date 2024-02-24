import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";

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
      paddingHorizontal: 16,
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
  });

export default createStyles;
