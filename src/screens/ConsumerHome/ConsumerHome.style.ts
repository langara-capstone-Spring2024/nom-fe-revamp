import { StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";
import { theme as t } from "../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: t.Surface.default,
    },
    addressContainer: { paddingHorizontal: 16, marginBottom: -32 },
    serchContainer: {
      paddingVertical: 16,
      paddingHorizontal: 16,
      backgroundColor: t.Surface.default,
    },
    cuisineTypesContainer: {
      marginTop: -32,
      paddingBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: t.Border.default,
    },
    cuisineType: { width: 100, aspectRatio: 1 },
    titleContainer: {
      paddingHorizontal: 16,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    listContainer: {
      paddingHorizontal: 16,
      gap: 16,
    },
  });

export default createStyles;
