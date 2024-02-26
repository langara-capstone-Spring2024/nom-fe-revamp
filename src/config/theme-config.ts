import { MD3LightTheme as DefaultTheme, MD3Theme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  colors: {
    // ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

export type Theme = typeof theme;
