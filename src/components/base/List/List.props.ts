import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export interface ListProps {
  hasLeftIcon?: boolean;
  leftIcon?: ReactNode;
  title: string;
  hasRightComponent?: boolean;
  rightComponent?: React.ReactElement;
  hasRightIcon?: boolean;
  rightIcon?: ReactNode;
  isLast?: boolean;
  hasBottomDescription?: boolean;
  bottomDescription?: string;
  style?: ViewStyle;
  hiddenComponent?: React.ReactElement<{
    onValueChange: (value: string) => void;
  }>;
}
