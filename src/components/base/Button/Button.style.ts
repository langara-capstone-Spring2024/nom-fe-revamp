import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { theme } from "../../../utils/Theme";

interface CustomStyle extends ViewStyle {
  textStyle?: TextStyle;
}

export interface ButtonStyles {
  primaryButton: CustomStyle;
  secondaryButton: CustomStyle;
  ghostButton: CustomStyle;
  errorButton: CustomStyle;
  smButton: CustomStyle;
  mdButton: CustomStyle;
  lgButton: CustomStyle;
  icon: ViewStyle;
  fullWidth: ViewStyle;
  iconTextGap: ViewStyle;
  pressedPrimaryButton: ViewStyle;
  pressedSecondaryButton: CustomStyle;
  pressedGhostButton: ViewStyle;
  pressedErrorButton: CustomStyle;
  disabledPrimaryButton: CustomStyle;
  disabledSecondaryButton: CustomStyle;
  disabledErrorButton: CustomStyle;
  disabledGhostButton: CustomStyle;
}

const baseButton: CustomStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginVertical: 8,
  textStyle: {
    fontFamily: "PublicSansItalic",
  },
};

const styles: ButtonStyles = StyleSheet.create({
  primaryButton: {
    backgroundColor: theme.Surface["brand-medium"],
    borderRadius: 8,
    textStyle: {
      color: theme.Content["white-strong"],
      fontFamily: "PublicSansRegular",
      fontWeight: "500",
    },
  } as CustomStyle,
  secondaryButton: {
    backgroundColor: theme.Surface["neutral-medium"],
    borderRadius: 19,
    textStyle: {
      color: theme.Content["medium"],
    },
  } as CustomStyle,
  errorButton: {
    backgroundColor: "transparent",
    textStyle: {
      color: theme.Content["error-medium"],
    },
  } as CustomStyle,
  ghostButton: {
    backgroundColor: "transparent",
    textStyle: {
      color: theme.Content["medium"],
    },
  } as CustomStyle,
  smButton: {
    height: 38,
    paddingLeft: 16,
    paddingRight: 16,
    textStyle: {
      fontSize: 14,
    },
  } as CustomStyle,
  mdButton: {
    height: 44,
    paddingLeft: 16,
    paddingRight: 16,
    textStyle: {
      fontSize: 14,
    },
  } as CustomStyle,
  lgButton: {
    height: 50,
    paddingLeft: 24,
    paddingRight: 24,
    textStyle: {
      fontSize: 16,
    },
  } as CustomStyle,
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
    backgroundColor: theme.Surface["brand-strong"],
  },
  pressedSecondaryButton: {
    backgroundColor: theme.Surface["neutral-strong"],
    textStyle: {
      color: theme.Content.primary,
    },
  } as CustomStyle,
  pressedErrorButton: {
    textStyle: {
      color: theme.Content["error-strong"],
    },
  } as CustomStyle,
  pressedGhostButton: {
    textStyle: {
      color: theme.Content.primary,
    },
  } as CustomStyle,
  disabledPrimaryButton: {
    backgroundColor: theme.Surface["neutral-medium"],
    textStyle: {
      color: theme.Content.inactive,
    },
  } as CustomStyle,
  disabledSecondaryButton: {
    backgroundColor: theme.Surface.sunken,
    textStyle: {
      color: theme.Content.inactive,
    },
  } as CustomStyle,
  disabledErrorButton: {
    textStyle: {
      color: theme.Content["inactive"],
    },
  } as CustomStyle,
  disabledGhostButton: {
    textStyle: {
      color: theme.Content["inactive"],
    },
  } as CustomStyle,
});

export { baseButton, styles as default };
