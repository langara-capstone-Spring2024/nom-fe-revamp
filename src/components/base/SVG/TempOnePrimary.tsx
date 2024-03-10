import React, { useState } from "react";
import { Svg, Rect, Path, Defs, Mask } from "react-native-svg";
import { SVGProps } from "./SVG.props";

const TempOnePrimary = ({ fill }: SVGProps): JSX.Element => {
  return (
    <Svg viewBox="0 0 153 152" fill="none">
      <Path d="M144.5 0.5H0.5V144.5H144.5V0.5Z" stroke="#FFBF41" />
      <Path d="M153 7H8V152H153V7Z" fill="#FFBF41" />
    </Svg>
  );
};

export default TempOnePrimary;
