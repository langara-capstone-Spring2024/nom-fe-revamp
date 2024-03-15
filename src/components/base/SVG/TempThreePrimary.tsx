import React, { useState } from "react";
import { Svg, Rect, Path, Defs, Mask } from "react-native-svg";
import { SVGProps } from "./SVG.props";

const TempThreePrimary = ({ fill }: SVGProps): JSX.Element => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 360 180" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M360 24C360 10.7452 349.255 0 336 0H24C10.7452 0 0 10.7452 0 24V156C0 169.255 10.7452 180 24 180H336C349.255 180 360 169.255 360 156V24ZM265.366 160.2C304.653 160.2 332.968 153.68 332.968 114.511C332.968 112.364 332.975 110.166 332.983 107.932L332.984 107.818V107.814C333.118 69.3173 333.29 19.8 296.196 19.8C256.909 19.8 185.4 43.4854 185.4 82.6537C185.4 121.822 226.079 160.2 265.366 160.2Z"
        fill={fill}
      />
    </Svg>
  );
};

export default TempThreePrimary;
