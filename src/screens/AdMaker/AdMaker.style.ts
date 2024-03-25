import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";
import { theme as t } from "../../utils/Theme";
const { width, height } = Dimensions.get("window");

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
      // backgroundColor: t.Content["brand-medium"],
      borderRadius: 8,
    },
    accentSquare: {
      height: 24,
      width: 24,
      // backgroundColor: t.Content["accent-medium"],
      borderRadius: 8,
    },
    editAdTextImageContainer: {
      // width: width - 36,
      // marginLeft: -36,
      // marginHorizontal: 47,
      paddingTop: 36,
      // paddingHorizontal: 47,
      flexDirection: "row",
      justifyContent: "center",
      aspectRatio: 16 / 9,
      borderRadius: 24,

      // shadowColor: "rgba(0, 0, 0, 0.15)",
      // shadowOffset: { width: 16, height: 16 },
      // shadowOpacity: 1,
      // shadowRadius: 0,
      // elevation: 16,
    },
    editAdTextImage: {
      borderRadius: 24,
      resizeMode: "cover",
      height: 134,
      width: 267,
    },
    edAdTextHeadlineWrapper: {
      width: width - 40,
      marginTop: 36,
    },
    campaignDetailsWrapper: {
      borderWidth: 1,
      borderColor: t.Border.default,
      width: width - 36,
      padding: 16,
      borderRadius: 16,
    },
    hr: {
      // height: 1,
      borderWidth: 0.5,
      borderColor: t.Border.default,
      marginTop: 16,
      marginRight: -16,
      marginLeft: -16,
    },
    hrInside: {
      // height: 1,
      borderWidth: 0.5,
      borderColor: t.Border.default,
      marginTop: 16,
    },
    priceWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 16,
    },
    dateWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 16,
    },
    scrollViewContent: {
      marginLeft: -36,
      height,
    },
    radioContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 10,
    },
    radioLabel: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
    },
    addNewCard: {
      flexDirection: "row",
      gap: 8,
      marginTop: 16,
      alignItems: "center",
      marginLeft: 8,
    },
    newCardContainer: {
      width: width - 32,
      marginLeft: 16,
      gap: 30,
    },
    cardField: {
      height: 50,
      borderWidth: 1,
      borderColor: "#939393",
      borderRadius: 8,
    },
    generateAdTextContainer: {
      flexDirection: "row",
      alignSelf: "flex-end",
      gap: 8,
      backgroundColor: t.Surface["neutral-medium"],
      padding: 16,
      borderRadius: 19,
    },
    generateAdTextBtn: {},
    keyboard: {
      marginLeft: -36,
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
    modalBg: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: -1,
    },
    loading: {
      position: "absolute",
      borderWidth: 1,
      borderColor: "red",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "#0000004D",
    },
  });

export default createStyles;
