import React, { useState } from "react";
import { Svg, Rect, Path, Defs, Mask } from "react-native-svg";
import { SVGProps } from "./SVG.props";
import { View } from "react-native";
import { useWindowDimensions } from "react-native";

const TempTwoPrimary = ({ fill }: SVGProps): JSX.Element => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 195 180" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M78.3711 180H171C183.996 180 194.58 169.67 194.988 156.772V23.2277C194.58 10.3362 184.006 0.00942933 171.018 6.45375e-06C171.012 2.15149e-06 171.006 0 171 0L6.54502 0.000451924C9.60974 5.18921 14.0622 21.2439 7.09625 42.3568C-1.6112 68.7479 -7.50196 92.5785 30.0703 100.737C67.6425 108.896 72.8838 110.858 72.3984 150.804C72.2586 162.307 74.7126 172.029 78.3711 180Z"
        fill={fill}
      />
    </Svg>
  );
};

export default TempTwoPrimary;
