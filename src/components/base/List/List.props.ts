import { ReactNode } from "react";

export interface ListProps {
  hasLeftIcon?: boolean;
  leftIcon?: ReactNode;
  title: string;
  rightComponent?: ReactNode;
  hasRightIcon?: boolean;
  rightIcon?: ReactNode;
  isLast?: boolean;
}
