import React, { useState } from "react";
import { Svg, Rect, Path, Defs, Mask } from "react-native-svg";
import { SVGProps } from "./SVG.props";
import { View } from "react-native";

const TempOnePrimary = ({ fill }: SVGProps): JSX.Element => {
  return (
      <Svg viewBox="0 0 131 131" fill="none">
        <Path
          stroke={fill}
          strokeWidth={0.9}
          d="M1.35 1.262h129.6v129.6H1.35z"
        />
        <Path d="M.1.113h130.5v130.5H.1z" fill={fill} />
      </Svg>
  );
};

export default TempOnePrimary;
