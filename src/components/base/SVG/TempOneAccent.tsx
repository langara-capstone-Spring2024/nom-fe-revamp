import React, { useState } from "react";
import { Svg, Rect, Path, Defs, Mask } from "react-native-svg";
import { SVGProps } from "./SVG.props";

const TempOneAccent = ({ fill }: SVGProps): JSX.Element => {
  return (
    <Svg viewBox="0 0 141 180" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 0C10.7452 0 0 10.7452 0 24V156C0 169.255 10.7452 180 24 180H140.4V0H24Z"
        fill={fill}
      />
    </Svg>
  );
};

export default TempOneAccent;
