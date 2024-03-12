import { SvgXml } from "react-native-svg";
import { SVGProps } from "./SVG.props";

const Check = (props: SVGProps) => {
  const { fill, width, height, stroke, style } = props;

  const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="98" height="99" viewBox="0 0 98 99" fill="none">
  <g clip-path="url(#clip0_3869_14886)">
    <path d="M42.3921 67.9898C41.3646 67.9898 40.3418 67.5986 39.5594 66.8162L24.0101 51.2668C22.4452 49.702 22.4452 47.1662 24.0101 45.6014C25.5749 44.0365 28.1107 44.0365 29.6755 45.6014L45.2248 61.1507C46.7897 62.7155 46.7897 65.2513 45.2248 66.8162C44.4424 67.5986 43.4196 67.9898 42.3921 67.9898Z" fill="url(#paint0_radial_3869_14886)"/>
    <path d="M42.3638 67.9901C41.3363 67.9901 40.3135 67.5989 39.531 66.8165C37.9662 65.2517 37.9662 62.7159 39.531 61.1511L68.3249 32.3572C69.8897 30.7924 72.4255 30.7924 73.9904 32.3572C75.5552 33.9221 75.5552 36.4578 73.9904 38.0227L45.1965 66.8212C44.4141 67.6037 43.3913 67.9949 42.3638 67.9949V67.9901Z" fill="url(#paint1_radial_3869_14886)"/>
    <path d="M49 98.1133C21.9831 98.1133 0 76.1302 0 49.1133C0 22.0964 21.9831 0.113281 49 0.113281C76.0169 0.113281 98 22.0964 98 49.1133C98 76.1302 76.0169 98.1133 49 98.1133ZM49 8.12598C26.3995 8.12598 8.0127 26.5128 8.0127 49.1133C8.0127 71.7138 26.3995 90.1006 49 90.1006C71.6005 90.1006 89.9873 71.7138 89.9873 49.1133C89.9873 26.5128 71.6005 8.12598 49 8.12598Z" fill="url(#paint2_radial_3869_14886)"/>
  </g>
  <defs>
    <radialGradient id="paint0_radial_3869_14886" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(41.5388 65.9281) rotate(-130.601) scale(23.0808 21.5762)">
      <stop stop-color="#C9081E"/>
      <stop offset="1" stop-color="#EF394E"/>
    </radialGradient>
    <radialGradient id="paint1_radial_3869_14886" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(67.5726 64.7739) rotate(-130.598) scale(36.0575 33.7063)">
      <stop stop-color="#C9081E"/>
      <stop offset="1" stop-color="#EF394E"/>
    </radialGradient>
    <radialGradient id="paint2_radial_3869_14886" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(77.7875 89.5383) rotate(-130.601) scale(95.9985 89.7404)">
      <stop stop-color="#C9081E"/>
      <stop offset="1" stop-color="#EF394E"/>
    </radialGradient>
    <clipPath id="clip0_3869_14886">
      <rect width="98" height="98" fill="white" transform="translate(0 0.113281)"/>
    </clipPath>
  </defs>
</svg>
  `;

  return <SvgXml xml={xml} style={style} />;
};

export default Check;
