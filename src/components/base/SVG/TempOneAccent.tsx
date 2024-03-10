import React, { useState } from "react";
import { Svg, Rect, Path, Defs, Mask } from "react-native-svg";
import { SVGProps } from "./SVG.props";

const TempOneAccent = ({ fill }: SVGProps): JSX.Element => {
  return (
    <Svg viewBox="0 0 156 200" fill="none">
      <Path d="M156 0H0V200H156V0Z" fill={fill} />
    </Svg>
  );
};

export default TempOneAccent;
