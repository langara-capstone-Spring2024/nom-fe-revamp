import { SvgXml } from "react-native-svg";
import { SVGProps } from "./SVG.props";

const CouponUnselected = (props: SVGProps) => {
  const { fill, width = 24, height = 24, stroke, style } = props;

  const xml = `
  <svg height="${height}" width="${width}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M 0 0 L ${width} 0 L ${width} ${height / 4} A ${height / 4} ${
    height / 4
  } 0 0 0 ${width} ${height * (3 / 4)} L ${width} ${height} L 0 ${height} L 0 ${
    height * (3 / 4)
  } A ${height / 4} ${height / 4} 0 0 0 0 ${
    height / 4
  } Z" fill="#FFF0F1" stroke-width="1" stroke="#FFF0F1" />
  <path d="M 0 0 L 0 ${height / 4} 0 ${height / 4} A ${height / 4} ${
    height / 4
  } 0 0 1 0 ${
    height * (3 / 4)
  } L 0 ${height}" stroke="#FF6173" stroke-width="1" stroke-dasharray="3, 3" />
  <path d="M ${width} 0 L ${width} ${height / 4} A ${height / 4} ${
    height / 4
  } 0 0 0 ${width} ${
    height * (3 / 4)
  } L ${width} ${height}" stroke="#FF6173" stroke-width="1" stroke-dasharray="3, 3" />
</svg>
`;

  return <SvgXml xml={xml} style={style} />;
};

export default CouponUnselected;
