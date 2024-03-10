import { SvgXml } from "react-native-svg";
import { SVGProps } from "./SVG.props";

const AccountTab = (props: SVGProps) => {
  const { fill, width, height, stroke, style } = props;

  const xml = `
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.832 4.75C11.3132 4.75 10.082 5.98122 10.082 7.5C10.082 9.01878 11.3132 10.25 12.832 10.25C14.3508 10.25 15.582 9.01878 15.582 7.5C15.582 5.98122 14.3508 4.75 12.832 4.75ZM8.58203 7.5C8.58203 5.15279 10.4848 3.25 12.832 3.25C15.1792 3.25 17.082 5.15279 17.082 7.5C17.082 9.84721 15.1792 11.75 12.832 11.75C10.4848 11.75 8.58203 9.84721 8.58203 7.5Z" fill="${fill}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.08203 18C5.08203 15.3766 7.20868 13.25 9.83203 13.25H15.832C18.4554 13.25 20.582 15.3766 20.582 18V20C20.582 20.9665 19.7985 21.75 18.832 21.75H6.83203C5.86553 21.75 5.08203 20.9665 5.08203 20V18ZM9.83203 14.75C8.03711 14.75 6.58203 16.2051 6.58203 18V20C6.58203 20.1381 6.69396 20.25 6.83203 20.25H18.832C18.9701 20.25 19.082 20.1381 19.082 20V18C19.082 16.2051 17.627 14.75 15.832 14.75H9.83203Z" fill="${fill}"/>
  </svg>
  `;

  return <SvgXml xml={xml} style={style} />;
};

export default AccountTab;
