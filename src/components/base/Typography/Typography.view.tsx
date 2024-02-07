import { Text } from "react-native";
import { TypographyProps, getStyleForVariant } from "./Typography.props";

const Typography: React.FC<TypographyProps> = ({
  variant,
  alignment,
  weight,
  children,
  otherStyle,
}) => {
  const variantStyle = getStyleForVariant(variant);

  return (
    <Text
      style={[
        variantStyle,
        {
          textAlign: alignment,
          fontWeight: weight || "normal",
        },
        otherStyle,
      ]}
    >
      {children}
    </Text>
  );
};

export default Typography;
