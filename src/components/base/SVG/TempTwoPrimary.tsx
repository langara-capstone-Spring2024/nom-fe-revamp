import React, { useState } from "react";
import { Svg, Rect, Path, Defs, Mask } from "react-native-svg";
import { SVGProps } from "./SVG.props";
import { View } from "react-native";
import { useWindowDimensions } from "react-native";

const TempTwoPrimary = ({ width, fill }: SVGProps): JSX.Element => {
  const originalWidth = 216;
  const originalHeight = 200;

  return (
    <Svg
      width={"100%"}
      height={"100%"}
      preserveAspectRatio="xMinYMin slice"
      viewBox={`0 0 ${originalWidth} ${originalHeight}`}>
      <Path
        d="M7.217 47.063C14.957 23.604 10.01 5.766 6.605.001L215.986 0v200.001H86.412c-4.065-8.857-6.792-19.659-6.637-32.441.54-44.384-5.284-46.564-47.03-55.629-41.748-9.066-35.203-35.544-25.528-64.868Z"
        fill={fill}
      />
    </Svg>
  );
};

export default TempTwoPrimary;
