import React from "react";
import { SVGProps } from "./SVG.props";
import { SvgXml } from "react-native-svg";

const TempTwo = (props: SVGProps): JSX.Element => {
  const { width, height, fill } = props;

  const xml = ` <svg
  xmlns="http://www.w3.org/2000/svg"
  width="215"
  height="200"
  viewBox="0 0 215 200"
  fill="none">
  <path
    d="M7.23185 47.0637C14.9718 23.605 10.0958 6.2097 6.69085 0.444406L6.61886 -5.73406L222.686 -9.92578L231.767 227.591L112.129 228.979C101.169 223.301 79.3579 203.069 79.7899 167.561C80.3289 123.176 74.5049 120.997 32.7579 111.931C-8.98915 102.866 -2.44315 76.3872 7.23185 47.0637Z"
    fill="#FFE1E4"
  />
</svg>`;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return <SvgXml xml={xml} width="100%" height="100%" />;
};

export default TempTwo;
