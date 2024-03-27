import { SvgXml } from "react-native-svg";
import { SVGProps } from "./SVG.props";

const Check = (props: SVGProps) => {
  const { fill, width, height, stroke, style } = props;

  const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="98" height="99" viewBox="0 0 98 99" fill="none">
  <g clip-path="url(#clip0_4309_14911)">
    <path d="M42.3916 67.9902C41.3641 67.9902 40.3413 67.5989 39.5589 66.8165L24.0096 51.2672C22.4447 49.7023 22.4447 47.1666 24.0096 45.6017C25.5744 44.0369 28.1102 44.0369 29.675 45.6017L45.2244 61.1511C46.7892 62.7159 46.7892 65.2517 45.2244 66.8165C44.4419 67.5989 43.4191 67.9902 42.3916 67.9902Z" fill="#07BB39"/>
    <path d="M42.3634 67.9901C41.3358 67.9901 40.313 67.5989 39.5306 66.8165C37.9658 65.2517 37.9658 62.7159 39.5306 61.1511L68.3245 32.3572C69.8893 30.7924 72.4251 30.7924 73.9899 32.3572C75.5548 33.9221 75.5548 36.4578 73.9899 38.0227L45.1961 66.8212C44.4137 67.6037 43.3909 67.9949 42.3634 67.9949V67.9901Z" fill="#07BB39"/>
    <path d="M49 98.1133C21.9831 98.1133 0 76.1302 0 49.1133C0 22.0964 21.9831 0.113281 49 0.113281C76.0169 0.113281 98 22.0964 98 49.1133C98 76.1302 76.0169 98.1133 49 98.1133ZM49 8.12598C26.3995 8.12598 8.0127 26.5128 8.0127 49.1133C8.0127 71.7138 26.3995 90.1006 49 90.1006C71.6005 90.1006 89.9873 71.7138 89.9873 49.1133C89.9873 26.5128 71.6005 8.12598 49 8.12598Z" fill="url(#paint0_radial_4309_14911)"/>
  </g>
  <defs>
    <radialGradient id="paint0_radial_4309_14911" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(77.7875 89.5383) rotate(-130.601) scale(95.9985 89.7404)">
      <stop stop-color="#07BB39"/>
      <stop offset="1" stop-color="#07BB39"/>
    </radialGradient>
    <clipPath id="clip0_4309_14911">
      <rect width="98" height="98" fill="white" transform="translate(0 0.113281)"/>
    </clipPath>
  </defs>
</svg>
  `;

  return <SvgXml xml={xml} style={style} />;
};

export default Check;
