import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export interface ListProps {
  title: string;
  hasLeftIcon?: boolean;
  leftIcon?: ReactNode;
  hasRightIcon?: boolean;
  rightIcon?: ReactNode;
  hasRightComponent?: boolean;
  rightComponent?: React.ReactNode | (() => React.ReactNode);
  handleRightComponentClick?: (value: any) => void;
  isLast?: boolean;
  hasBottomDescription?: boolean;
  bottomDescription?: string;
  hiddenComponent?: React.ReactElement<{
    onValueChange: (value: string) => void;
  }>;
  hiddenComponentIsVisible?: string | boolean | null;
  style?: ViewStyle;
  titleColor?: string;
}
