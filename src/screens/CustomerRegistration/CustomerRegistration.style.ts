import { StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";

const createStyles = (theme: Theme) => StyleSheet.create({
    progressBar: {
        marginHorizontal: 32,
      },
      buttonContainer: {
        padding: 12,
        paddingBottom: 16,
      },
      label: {
        marginBottom: 8,
      },
});

export default createStyles;
