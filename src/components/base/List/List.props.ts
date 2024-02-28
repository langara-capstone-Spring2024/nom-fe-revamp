import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export interface ListProps {
  hasLeftIcon?: boolean;
  leftIcon?: ReactNode;
  title: string;
  rightComponent?: ReactNode;
  hasRightIcon?: boolean;
  rightIcon?: ReactNode;
  isLast?: boolean;
  hasBottomDescription?: boolean;
  bottomDescription?: string;
  style?: ViewStyle;
}
