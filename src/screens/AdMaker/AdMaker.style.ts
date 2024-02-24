import { StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: "#fff",
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
    pickerContainer: {
      alignSelf: "center",
      width: 300,
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,

      elevation: 10,
    },
    panelStyle: {
      borderRadius: 16,

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
