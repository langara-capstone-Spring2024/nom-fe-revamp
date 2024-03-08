import { SvgXml } from "react-native-svg";
import { SVGProps } from "./SVG.props";

const HomeFilledTab = (props: SVGProps) => {
  const { fill, width, height, stroke, style } = props;

  const xml = `
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.78511 7.73394C3.76667 8.48834 3.16602 9.68076 3.16602 10.9482V17.2666C3.16602 19.4757 4.95688 21.2666 7.16602 21.2666H17.166C19.3752 21.2666 21.166 19.4757 21.166 17.2666V10.9482C21.166 9.68076 20.5654 8.48834 19.5469 7.73394L13.9517 3.58933C12.8909 2.80356 11.4411 2.80356 10.3803 3.58933L4.78511 7.73394ZM10.166 15.5166C9.7518 15.5166 9.41602 15.8524 9.41602 16.2666C9.41602 16.6808 9.7518 17.0166 10.166 17.0166H14.166C14.5802 17.0166 14.916 16.6808 14.916 16.2666C14.916 15.8524 14.5802 15.5166 14.166 15.5166H10.166Z" fill="${fill}"/>
  </svg>
  `;

  return <SvgXml xml={xml} style={style} />;
};

export default HomeFilledTab;
