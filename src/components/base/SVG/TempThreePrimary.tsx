import React, { useState } from "react";
import { Svg, Rect, Path, Defs, Mask } from "react-native-svg";
import { SVGProps } from "./SVG.props";

const TempThreePrimary = ({ fill }: SVGProps): JSX.Element => {
  return (
    <Svg viewBox="0 0 400 200" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M400 0H0V200H400V0ZM294.851 178C338.503 178 369.964 170.756 369.964 127.235C369.964 124.808 369.973 122.324 369.982 119.798C370.131 77.0229 370.324 22 329.107 22C285.455 22 206 48.3171 206 91.8374C206 135.358 251.199 178 294.851 178Z"
        fill={fill}
      />
    </Svg>
  );
};

export default TempThreePrimary;
