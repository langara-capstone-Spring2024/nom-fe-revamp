import { SvgXml } from "react-native-svg";
import { SVGProps } from "./SVG.props";

const RestaurantDetailLocation = (props: SVGProps) => {
  const { fill, width, height, stroke, style } = props;

  const xml = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.33337C9.5913 1.33337 11.1174 1.96552 12.2426 3.09073C13.3679 4.21595 14 5.74208 14 7.33337C14 9.38271 12.8827 11.06 11.7053 12.2634C11.117 12.858 10.4752 13.3971 9.788 13.874L9.504 14.0674L9.37067 14.156L9.11933 14.316L8.89533 14.4527L8.618 14.614C8.42967 14.7212 8.2167 14.7776 8 14.7776C7.7833 14.7776 7.57033 14.7212 7.382 14.614L7.10467 14.4527L6.758 14.2394L6.63 14.156L6.35667 13.974C5.61532 13.4723 4.92471 12.8993 4.29467 12.2634C3.11733 11.0594 2 9.38271 2 7.33337C2 5.74208 2.63214 4.21595 3.75736 3.09073C4.88258 1.96552 6.4087 1.33337 8 1.33337ZM8 2.66671C6.76232 2.66671 5.57534 3.15837 4.70017 4.03354C3.825 4.90871 3.33333 6.0957 3.33333 7.33337C3.33333 8.88137 4.18133 10.24 5.24733 11.3307C5.70575 11.7946 6.20116 12.2205 6.72867 12.604L7.034 12.8214C7.13267 12.89 7.22733 12.954 7.31867 13.0134L7.57867 13.18L7.80733 13.3194L8 13.432L8.30333 13.2527L8.548 13.0994C8.678 13.0167 8.818 12.924 8.966 12.8214L9.27133 12.604C9.79884 12.2205 10.2943 11.7946 10.7527 11.3307C11.8187 10.2407 12.6667 8.88137 12.6667 7.33337C12.6667 6.0957 12.175 4.90871 11.2998 4.03354C10.4247 3.15837 9.23768 2.66671 8 2.66671ZM8 4.66671C8.70724 4.66671 9.38552 4.94766 9.88562 5.44776C10.3857 5.94785 10.6667 6.62613 10.6667 7.33337C10.6667 8.04062 10.3857 8.7189 9.88562 9.21899C9.38552 9.71909 8.70724 10 8 10C7.29276 10 6.61448 9.71909 6.11438 9.21899C5.61428 8.7189 5.33333 8.04062 5.33333 7.33337C5.33333 6.62613 5.61428 5.94785 6.11438 5.44776C6.61448 4.94766 7.29276 4.66671 8 4.66671ZM8 6.00004C7.64638 6.00004 7.30724 6.14052 7.05719 6.39057C6.80714 6.64061 6.66667 6.97975 6.66667 7.33337C6.66667 7.687 6.80714 8.02613 7.05719 8.27618C7.30724 8.52623 7.64638 8.66671 8 8.66671C8.35362 8.66671 8.69276 8.52623 8.94281 8.27618C9.19286 8.02613 9.33333 7.687 9.33333 7.33337C9.33333 6.97975 9.19286 6.64061 8.94281 6.39057C8.69276 6.14052 8.35362 6.00004 8 6.00004Z" fill="#363636"/>
</svg>
`;

  return <SvgXml xml={xml} style={style} />;
};

export default RestaurantDetailLocation;
