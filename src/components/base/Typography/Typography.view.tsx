import { Text } from "react-native";
import { TypographyProps, getStyleForVariant } from "./Typography.props";
import { theme } from "../../../utils/Theme";
import { Theme } from "../../../types/Theme";

const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  alignment,
  weight,
  children,
  otherStyle,
  color,
}) => {
  const variantStyle = getStyleForVariant(variant);
  const textColor = theme.Content[color as keyof Theme["Content"]];
  const defaultStyle = {
    fontFamily: "PublicSansRegular",
    fontWeight: weight,
  };

  const mergedStyles = [
    defaultStyle,
    variantStyle,
    { textAlign: alignment, color: textColor },
    otherStyle,
  ];
  return <Text style={mergedStyles}>{children}</Text>;
};

export default Typography;
