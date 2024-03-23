import { TextStyle, ViewStyle } from "react-native";
import { Image } from "../../../types";

export interface AdTemplateThreeProps {
  image?: Image;
  headline: string;
  tagline: string;
  primary: string;
  secondary: string;
  width?: string;
  height?: string;
  style?: TextStyle & ViewStyle;
  onSelectTemplate: (v: number) => void;
}
