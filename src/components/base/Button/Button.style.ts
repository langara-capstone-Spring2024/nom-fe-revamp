import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export interface ButtonStyles {
  primaryButton: ViewStyle & TextStyle;
  secondaryButton: ViewStyle & TextStyle;
  tertiaryButton: ViewStyle & TextStyle;
  ghostButton: ViewStyle & TextStyle;
  smButton: ViewStyle & TextStyle;
  mdButton: ViewStyle & TextStyle;
  lgButton: ViewStyle & TextStyle;
  icon: ViewStyle;
  fullWidth: ViewStyle;
  iconTextGap: ViewStyle;
  pressedPrimaryButton: ViewStyle;
  pressedSecondaryButton: ViewStyle;
  pressedTertiaryButton: ViewStyle;
  pressedGhostButton: ViewStyle;
  disabledPrimarySecondaryButton: ViewStyle;
  disabledTertiaryButton: ViewStyle;
  disabledGhostButton: ViewStyle;
}

const baseButton: ViewStyle = {
  borderRadius: 8,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginVertical: 8,
};

const styles: ButtonStyles = StyleSheet.create({
  primaryButton: {
    backgroundColor: "#9563FF",
    textStyle: {
      color: "white",
    },
  },
  secondaryButton: {
    backgroundColor: "#F583F0",
    textStyle: {
      color: "white",
    },
  },
  tertiaryButton: {
    backgroundColor: "#F0F0F0",
    borderColor: "#D4D4D4",
    borderWidth: 1,
    textStyle: {
      color: "#3C3C3C",
    },
  },
  ghostButton: {
    backgroundColor: "transparent",
    borderBottomColor: "#3C3C3C",
    borderBottomWidth: 2,
    textStyle: {
      color: "#3C3C3C",
    },
  },
  smButton: {
    height: 38,
    paddingLeft: 16,
    paddingRight: 16,
    textStyle: {
      fontSize: 14,
    },
  },
  mdButton: {
    height: 44,
    paddingLeft: 16,
    paddingRight: 16,
    textStyle: {
      fontSize: 14,
    },
  },
  lgButton: {
    height: 50,
    paddingLeft: 24,
    paddingRight: 24,
    textStyle: {
      fontSize: 16,
    },
  },
  icon: {
    display: "flex",
    flexDirection: "column",
  },
  fullWidth: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  iconTextGap: {
    width: 8,
  },
  pressedPrimaryButton: {
    backgroundColor: "#8750FF",
  },
  pressedSecondaryButton: {
    backgroundColor: "#F373EC",
  },
  pressedTertiaryButton: {
    backgroundColor: "#E6E6E6",
    borderColor: "#939393",
  },
  pressedGhostButton: {
    borderBottomColor: "#222222",
  },
  disabledPrimarySecondaryButton: {
    backgroundColor: "#D4D4D4",
    textStyle: {
      color: "#939393",
    },
  },
  disabledTertiaryButton: {
    backgroundColor: "transparent",
    borderColor: "#D4D4D4",
    textStyle: {
      color: "#D4D4D4",
    },
  },
  disabledGhostButton: {
    backgroundColor: "transparent",
    borderBottomColor: "#D4D4D4",
    textStyle: {
      color: "#D4D4D4",
    },
  },
});

export { baseButton, styles as default };
