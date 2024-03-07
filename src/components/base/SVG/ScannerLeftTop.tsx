import { SvgXml } from "react-native-svg";
import { SVGProps } from "./SVG.props";

const ScannerLeftTop = (props: SVGProps) => {
  const { fill, width, height, stroke, style } = props;

  const xml = `
<svg height="50" width="50" viewBox="0 0 50 50" fill="black" xmlns="http://www.w3.org/2000/svg">
<path d="M 0 50 L 0 0 L 50 0 A 50 50 0 0 0 0 50" />
</svg>
`;

  return <SvgXml xml={xml} opacity={0.75} style={style} />;
};

export default ScannerLeftTop;
