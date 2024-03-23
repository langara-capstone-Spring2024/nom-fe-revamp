import React, { ReactNode } from "react";

export interface AccordionProps {
  title: string;
  children?: ReactNode;
  hasLeftItem?: boolean;
  leftItem?: ReactNode;
  hasRightItem?: boolean;
  rightItem?: ReactNode;
  expanded?: boolean;
}
