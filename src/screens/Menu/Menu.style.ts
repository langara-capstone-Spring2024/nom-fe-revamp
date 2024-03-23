import { StyleSheet, Dimensions } from "react-native";
import { Theme } from "../../config/theme-config";
import { theme as t } from "./../../utils/Theme";
const windowWidth = Dimensions.get("window").width;

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 2,
      marginBottom: 50,
    },

    addItemContainer: {
      backgroundColor: "#fff",
      flex: 2,
    },

    imagePicker: {
      marginTop: 36,
      marginBottom: 32,
    },

    menuCardContainer: {},

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
      marginTop: 20,
      marginLeft: 10,
      flex: 1,
    },

    errorPriceCurrency: {
      marginTop: 5,
      marginLeft: 10,
      flex: 1,
    },

    textareaContainer: {
      marginBottom: 2,
    },

    buttonContainer: {
      position: "absolute",
      bottom: 16,
      left: 0,
      right: 0,
      paddingHorizontal: 16,
      borderTopWidth: 1,
      borderColor: t.Border["default"],
      paddingTop: 16,
      paddingBottom: 16,
    },

    keyboard: {
      // marginLeft: -36,
    },
  });

export default createStyles;
