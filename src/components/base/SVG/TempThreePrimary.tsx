import React, { useState } from "react";
import { Svg, Rect, Path, Defs, Mask } from "react-native-svg";
import { SVGProps } from "./SVG.props";

const TempThreePrimary = ({ width, height, fill, ...rest }: SVGProps): JSX.Element => {
  return (
    <Svg width={width} height={height}>
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M400 0H0v200h400V0ZM294.851 178c43.652 0 75.113-7.244 75.113-50.765 0-2.427.009-4.911.018-7.437.149-42.775.342-97.798-40.875-97.798C285.455 22 206 48.317 206 91.837 206 135.358 251.199 178 294.851 178Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default TempThreePrimary;
