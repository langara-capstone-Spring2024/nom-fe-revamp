import React, { useState } from "react";
import { Svg, Rect, Path, Defs, Mask } from "react-native-svg";
import { SVGProps } from "./SVG.props";
import { View } from "react-native";

const TempOnePrimary = ({ fill }: SVGProps): JSX.Element => {
  return (
    <Svg viewBox="0 0 139 138" fill="none" height={"100%"} width="100%">
      <Path
        d="M130.95 1.15039H1.35034V130.75H130.95V1.15039Z"
        stroke={fill}
        stroke-width="0.9"
      />
      <Path d="M138.6 7H8.10034V137.5H138.6V7Z" fill={fill} />
    </Svg>
  );
};

export default TempOnePrimary;
