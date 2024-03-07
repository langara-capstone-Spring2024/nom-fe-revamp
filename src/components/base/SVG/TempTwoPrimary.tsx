import React, { useState } from "react";
import { Svg, Rect, Path, Defs, Mask } from "react-native-svg";

const TempTwoPrimary = ({
  width,
  height,
  fill,
}: {
  width: number;
  height: number;
  fill: string;
}): JSX.Element => {
  return (
    <Svg width={width} height={height}>
      <Defs>
        <Mask id="mask" x="0" y="0" width={width} height={height}>
          <Rect width={width} height={height} fill={fill} />
        </Mask>
      </Defs>
      <Path
        d="M7.217 47.063C14.957 23.604 10.01 5.766 6.605.001L215.986 0v200.001H86.412c-4.065-8.857-6.792-19.659-6.637-32.441.54-44.384-5.284-46.564-47.03-55.629-41.748-9.066-35.203-35.544-25.528-64.868Z"
        fill={fill}
      />
    </Svg>
  );
};

export default TempTwoPrimary;
