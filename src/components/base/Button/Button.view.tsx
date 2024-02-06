import { View, Text, TouchableOpacity, TextStyle } from "react-native";
import { ButtonProps } from "./Button.props";
import styles, { baseButton } from "./Button.style";
import { useState } from "react";

const Button = (props: ButtonProps) => {
  const {
    text,
    variant,
    iconPosition,
    icon,
    buttonSize,
    takeFullWidth,
    onPress,
    isDisabled,
  } = props;

  const [isPressed, setIsPressed] = useState(false);

  const handleOnPress = () => {
    setIsPressed(true);
    onPress && onPress();
  };

  const handleOffPress = () => {
    setIsPressed(false);
  };

  const variantStyle = () => {
    switch (variant) {
      case "primary":
        return {
          ...styles.primaryButton,
          ...(isPressed ? styles.pressedPrimaryButton : null),
          ...(isDisabled ? styles.disabledPrimarySecondaryButton : null),
        };
      case "secondary":
        return {
          ...styles.secondaryButton,
          ...(isPressed ? styles.pressedSecondaryButton : null),
          ...(isDisabled ? styles.disabledPrimarySecondaryButton : null),
        };
      case "tertiary":
        return {
          ...styles.tertiaryButton,
          ...(isPressed ? styles.pressedTertiaryButton : null),
          ...(isDisabled ? styles.disabledTertiaryButton : null),
        };
      case "ghost":
        return {
          ...styles.ghostButton,
          ...(isPressed ? styles.pressedGhostButton : null),
          ...(isDisabled ? styles.disabledGhostButton : null),
        };
      default:
        return null;
    }
  };

  const buttonSizeStyle = () => {
    switch (buttonSize) {
      case "sm":
        return styles.smButton;
      case "md":
        return styles.mdButton;
      case "lg":
        return styles.lgButton;
      default:
        return null;
    }
  };

  const textStyles = [
    (variantStyle() as { textStyle?: TextStyle })?.textStyle || {},
    (buttonSizeStyle() as { textStyle?: TextStyle })?.textStyle || {},
  ];

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity
        style={[
          baseButton,
          variantStyle(),
          buttonSizeStyle(),
          takeFullWidth && styles.fullWidth,
        ]}
        onPressIn={handleOnPress}
        onPressOut={handleOffPress}
        disabled={isDisabled}
      >
        {iconPosition === "left" && (
          <>
            <View style={styles.icon}>{icon}</View>
            <View style={styles.iconTextGap} />
          </>
        )}

        {text && <Text style={textStyles}>{text}</Text>}

        {iconPosition === "right" && (
          <>
            <View style={styles.iconTextGap} />
            <View style={styles.icon}>{icon}</View>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
