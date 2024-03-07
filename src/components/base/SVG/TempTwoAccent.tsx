import React from "react";
import { Svg, Rect, Path, Defs, Mask } from "react-native-svg";

const TempTwoAccent = ({
  width,
  height,
  fill,
}: {
  width: number;
  height: number;
  fill: string;
}) => (
  <Svg width={400} height={200} fill="none">
    <Path stroke={fill} strokeWidth={3} d="M388.5 9.5h-377v181h377V9.5Z" />
    <Path stroke={fill} strokeWidth={2} d="M230 72h139M286 95h83" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m232 165 7.6-8 7.6 8 7.6-8 7.6 8 7.6-8 7.6 8 7.6-8 7.6 8M250 176l7.6-8 7.6 8 7.6-8 7.6 8 7.6-8 7.6 8 7.6-8 7.6 8"
    />
    <Path
      fill={fill}
      d="M23.5 64a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM23.5 55a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM23.5 46a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM23.5 37a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM23.5 28a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM23.5 19a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM33.5 64a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM33.5 55a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM33.5 46a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM33.5 37a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM33.5 28a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM33.5 19a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
    />
  </Svg>
);

export default TempTwoAccent;
