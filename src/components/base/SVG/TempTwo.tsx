import React, { useState } from "react";
import { Svg, Rect, Path, Defs, Mask } from "react-native-svg";

const TempTwo = ({
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
        d="M7.23185 47.0637C14.9718 23.605 10.0958 6.2097 6.69085 0.444406L6.61886 -5.73406L222.686 -9.92578L231.767 227.591L112.129 228.979C101.169 223.301 79.3579 203.069 79.7899 167.561C80.3289 123.176 74.5049 120.997 32.7579 111.931C-8.98915 102.866 -2.44315 76.3872 7.23185 47.0637Z"
        fill={fill}
        // mask="url(#mask)"
      />
    </Svg>
  );
};

export default TempTwo;
