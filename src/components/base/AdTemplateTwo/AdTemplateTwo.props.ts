import { Image } from "../../../types";

export interface AdTemplateTwoProps {
  image?: Image;
  headline: string;
  tagline: string;
  variant: number;
  primary: string;
  secondary: string;
  width?: string;
  height?: string;
}
