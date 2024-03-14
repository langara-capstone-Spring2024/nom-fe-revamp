import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";


const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      padding: 16,
      flex: 2,
    },
    orderCardContainer: {
      marginBottom: 16,
    },
    buttonContainer: {
      position: "absolute",
      bottom: 16,
      left: 0,
      right: 0,
      paddingHorizontal: 16,
    },
    successModalContainer: {
      backgroundColor: "white",
      padding: 20,
      margin: 30,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 4,
      borderWidth: 1,
      borderColor: "#D4D4D4",
      borderRadius: 16,
    },
    successModal: {
      fontFamily: "PublicSansBold",
      marginTop: 26,
    },
    
  });

export default createStyles;
