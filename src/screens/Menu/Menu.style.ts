import { StyleSheet, Dimensions } from "react-native";
import { Theme } from "../../config/theme-config";
const windowWidth = Dimensions.get("window").width;

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      flex: 2,
    },

    menuCardContainer: {
      padding: 16,
    },

    imagePicker: {
      marginTop: 36,
      marginBottom: 32,
      // width: windowWidth - 50,
    },

    inputContainer: {
      paddingLeft: 16,
      paddingRight: 16,
    },

    nameContainer: {
      marginBottom: 16,
    },

    priceContainer: {
      marginBottom: 16,
      flexDirection: "row",
      alignItems: "center",
    },

    priceTextfieldContainer: {
      flex: 1,
    },

    priceCurrency: {
      justifyContent: "center",
      marginTop: 23,
      marginLeft: 10,
      flex: 1,
      
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
