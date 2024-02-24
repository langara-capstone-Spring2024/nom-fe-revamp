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
  });

export default createStyles;
