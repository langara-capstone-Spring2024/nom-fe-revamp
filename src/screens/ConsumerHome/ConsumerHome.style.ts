import { StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";
import { theme as t } from "../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    addressContainer: { marginBottom: -32 },
    serchContainer: {
      marginHorizontal: -16,
      padding: 16,
      backgroundColor: t.Surface.default,
      borderBottomColor: t.Border.default,
      borderBottomWidth: 1,
    },
    cuisineTypesContainer: {
      marginHorizontal: -16,
      marginTop: -32,
      paddingBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: t.Border.default,
    },
    cuisineType: { width: 100, aspectRatio: 1 },
    titleContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    listContainer: {
      gap: 16,
    },
  });

export default createStyles;
