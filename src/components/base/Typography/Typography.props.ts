// import { tokens as themeTokens } from "app/utils/Themes";
import { TextStyle, ViewStyle } from "react-native";
import typographyStyles from "./Typography.style";
import { theme } from "../../../utils/Theme";

export interface TypographyProps {
  variant?: Variants;
  alignment?: TextAlign;
  weight?: Weight;
  otherStyle?: TextStyle & ViewStyle;
  color?: keyof (typeof theme)["Content"];
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
  | "bodyXs"
  | "label2";

export type TextAlign = "left" | "right" | "center";

export type Weight = "normal" | "400" | "500" | "600" | "700";

export const getStyleForVariant = (v: Variants) => {
  return typographyStyles[v] || {};
};
