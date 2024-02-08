// import { tokens as themeTokens } from "app/utils/Themes";
import { TextStyle, ViewStyle } from "react-native";
import typographyStyles from "./Typography.style";

export interface TypographyProps {
  variant: Variants;
  alignment?: TextAlign;
  weight?: Weight;
  otherStyle?: TextStyle & ViewStyle;
  // color?: ColorKeys;
  children: any;
}

export type Variants =
  | "title1"
  | "title2"
  | "title3"
  | "title4"
  | "title5"
  | "body"
  | "bodySm"
  | "bodyXs";

export type TextAlign = "left" | "right" | "center";

// export type ColorKeys =
//   | keyof (typeof themeTokens.Color)["Content"]
//   | keyof (typeof themeTokens.Color)["Shadow"]
//   | keyof (typeof themeTokens.Color)["Border"]
//   | keyof (typeof themeTokens.Color)["Surface"];

export type Weight = "normal" | "400" | "500" | "600" | "700";

export const getStyleForVariant = (v: Variants) => {
  return typographyStyles[v] || {};
};
