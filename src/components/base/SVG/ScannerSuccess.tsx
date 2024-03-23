import { SvgXml } from "react-native-svg";
import { SVGProps } from "./SVG.props";

const ScannerSuccess = (props: SVGProps) => {
  const { fill, width, height, stroke, style } = props;

  const xml = `
<svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3307_12011)">
<path d="M42.3919 67.8765C41.3644 67.8765 40.3416 67.4853 39.5592 66.7029L24.0098 51.1535C22.445 49.5887 22.445 47.0529 24.0098 45.4881C25.5746 43.9232 28.1104 43.9232 29.6753 45.4881L45.2246 61.0374C46.7894 62.6023 46.7894 65.138 45.2246 66.7029C44.4422 67.4853 43.4194 67.8765 42.3919 67.8765Z" fill="url(#paint0_radial_3307_12011)"/>
<path d="M42.3636 67.8769C41.3361 67.8769 40.3133 67.4857 39.5309 66.7032C37.966 65.1384 37.966 62.6026 39.5309 61.0378L68.3247 32.2439C69.8896 30.6791 72.4254 30.6791 73.9902 32.2439C75.555 33.8088 75.555 36.3446 73.9902 37.9094L45.1963 66.708C44.4139 67.4904 43.3911 67.8816 42.3636 67.8816V67.8769Z" fill="url(#paint1_radial_3307_12011)"/>
<path d="M49 98C21.9831 98 0 76.0169 0 49C0 21.9831 21.9831 0 49 0C76.0169 0 98 21.9831 98 49C98 76.0169 76.0169 98 49 98ZM49 8.0127C26.3995 8.0127 8.0127 26.3995 8.0127 49C8.0127 71.6005 26.3995 89.9873 49 89.9873C71.6005 89.9873 89.9873 71.6005 89.9873 49C89.9873 26.3995 71.6005 8.0127 49 8.0127Z" fill="url(#paint2_radial_3307_12011)"/>
</g>
<defs>
<radialGradient id="paint0_radial_3307_12011" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(41.5386 65.8148) rotate(-130.601) scale(23.0808 21.5762)">
<stop stop-color="#C9081E"/>
<stop offset="1" stop-color="#EF394E"/>
</radialGradient>
<radialGradient id="paint1_radial_3307_12011" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(67.5725 64.6606) rotate(-130.598) scale(36.0575 33.7063)">
<stop stop-color="#C9081E"/>
<stop offset="1" stop-color="#EF394E"/>
</radialGradient>
<radialGradient id="paint2_radial_3307_12011" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(77.7875 89.425) rotate(-130.601) scale(95.9985 89.7404)">
<stop stop-color="#C9081E"/>
<stop offset="1" stop-color="#EF394E"/>
</radialGradient>
<clipPath id="clip0_3307_12011">
<rect width="98" height="98" fill="white"/>
</clipPath>
</defs>
</svg>
`;

  return <SvgXml xml={xml} style={style} />;
};

export default ScannerSuccess;
