import { SvgXml } from "react-native-svg";
import { SVGProps } from "./SVG.props";

const Download = (props: SVGProps) => {
  const { fill, width, height, stroke, style } = props;

  const xml = `
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.9997 12.612V15.112H4.99967V12.612H3.33301V15.112C3.33301 16.0286 4.08301 16.7786 4.99967 16.7786H14.9997C15.9163 16.7786 16.6663 16.0286 16.6663 15.112V12.612H14.9997ZM14.1663 9.27865L12.9913 8.10365L10.833 10.2536V3.44531H9.16634V10.2536L7.00801 8.10365L5.83301 9.27865L9.99967 13.4453L14.1663 9.27865Z" fill="white"/>
  </svg>
  `;

  return <SvgXml xml={xml} style={style} />;
};

export default Download;
