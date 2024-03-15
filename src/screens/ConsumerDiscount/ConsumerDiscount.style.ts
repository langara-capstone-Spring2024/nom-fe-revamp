import { StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";
import { theme as t } from "../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    headerContainer: {
      backgroundColor: t.Surface["brand-medium"],
      paddingVertical: 16,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    footerContainer: {
      backgroundColor: t.Surface.default,
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
      alignItems: "center",
      gap: 16,
    },
    qrcodeContainer: {
      borderRadius: 24,
      paddingVertical: 16,
      backgroundColor: t.Surface.default,
      alignItems: "center",
      width: "75%",
    },
    qrcode: {
      width: "50%",
      aspectRatio: 1,
    },
    listContainer: { gap: 16 },
    itemContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    statusContainer: {
      backgroundColor: t.Surface["warning-light"],
      paddingHorizontal: 8,
    },
    menuContainer: {
      flexDirection: "row",
      gap: 16,
      paddingVertical: 8,
      borderTopColor: t.Border.default,
      borderTopWidth: 1,
    },
    menuImage: {
      width: "100%",
      aspectRatio: 1,
      borderRadius: 12,
    },
    modal: {
      paddingVertical: 32,
      paddingHorizontal: 16,
      gap: 16,
    },
  });

export default createStyles;
