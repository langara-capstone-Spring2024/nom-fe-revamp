import { StyleSheet, Dimensions } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const windowWidth = Dimensions.get("window").width;

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      maxHeight: 200,
      // position: "relative",
    },
    image: {
      width: "100%",
      height: "100%",
      // borderRadius: 24,
      // resizeMode: "cover",
      // borderColor: t.Surface["brand-medium"],
    },
    overlay: {
      // flex: 1,
      // justifyContent: "center",
      // alignItems: "center",
      zIndex: 1, // Adjust the zIndex as needed
    },
    tempOnePrimary: {
      height: 145,
      width: 145,
      position: "absolute",
      backgroundColor: "#FFBF41",
      zIndex: 2,
      top: "13%",
      left: "15%",
    },
    tempOnePrimaryRec: {
      height: 145,
      width: 145,
      borderWidth: 1,
      borderColor: "#FFBF41",
      position: "absolute",
      zIndex: 3,
      top: "7%",
      left: "12%",
    },
    tempOneAccent: {
      height: "100%",
      backgroundColor: "#3C3C3C",
      position: "absolute",
      left: 0,
      zIndex: 1,
      width: "40%",
      borderTopLeftRadius: 24,
      borderBottomLeftRadius: 24,
    },
    tempOneHeadline: {
      position: "absolute",
      top: "20%",
      left: "18%",
      zIndex: 3,
      width: 130,
      height: 48,
      fontFamily: "PublicSansBold",
    },
    tempOneTagline: {
      position: "absolute",
      top: "55%",
      left: "18%",
      zIndex: 3,
      width: 130,
    },
    tempTwoHeadline: {
      position: "absolute",
      top: "22.5%",
      right: "8%",
      zIndex: 3,
      width: 130,
      height: 48,
      fontFamily: "PublicSansBold",
      color: "#3C3C3C",
      textAlign: "right",
      fontSize: 18,
    },
    tempTwoTagline: {
      position: "absolute",
      top: "50%",
      right: "8%",
      zIndex: 3,
      width: 100,
      color: "#3C3C3C",
      textAlign: "right",
      fontSize: 9,
    },
  });

export default createStyles;
