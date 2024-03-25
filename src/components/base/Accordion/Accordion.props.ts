import React, { ReactNode } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface AccordionProps {
  title: string;
  children?: ReactNode;
  hasLeftItem?: boolean;
  leftItem?: ReactNode;
  hasRightItem?: boolean;
  rightItem?: ReactNode;
  expanded?: boolean;
  wrapperStyle?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  rightComponentStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<TextStyle>;
}
