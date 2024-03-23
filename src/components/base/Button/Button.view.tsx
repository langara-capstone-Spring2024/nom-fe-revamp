import { View, Text, TouchableOpacity, TextStyle } from "react-native";
import { ButtonProps } from "./Button.props";
import styles, { baseButton } from "./Button.style";
import { useState } from "react";
import Typography from "../Typography";

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
    style,
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
          ...(isDisabled ? styles.disabledPrimaryButton : null),
        };
      case "secondary":
        return {
          ...styles.secondaryButton,
          ...(isPressed ? styles.pressedSecondaryButton : null),
          ...(isDisabled ? styles.disabledSecondaryButton : null),
        };
      case "chip":
        return {
          ...styles.chipButton,
          ...(isPressed ? styles.pressedSecondaryButton : null),
          ...(isDisabled ? styles.disabledSecondaryButton : null),
        };
      case "error":
        return {
          ...styles.errorButton,
          ...(isPressed ? styles.pressedErrorButton : null),
          ...(isDisabled ? styles.disabledErrorButton : null),
        };
      case "ghost":
        return {
          ...styles.ghostButton,
          ...(isPressed ? styles.pressedGhostButton : null),
          ...(isDisabled ? styles.disabledGhostButton : null),
        };
      default:
        return {
          ...styles.primaryButton,
          ...(isPressed ? styles.pressedPrimaryButton : null),
          ...(isDisabled ? styles.disabledPrimaryButton : null),
        };
    }
  };

  const buttonSizeStyle = () => {
    switch (buttonSize) {
      case "sm":
        return {
          ...styles.smButton,
          ...(variant === "primary"
            ? { borderRadius: 8 }
            : { borderRadius: 19 }),
        };
      case "md":
        return {
          ...styles.mdButton,
          ...(variant === "primary"
            ? { borderRadius: 12 }
            : { borderRadius: 22 }),
        };
      case "lg":
        return {
          ...styles.lgButton,
          ...(variant === "primary"
            ? { borderRadius: 16 }
            : { borderRadius: 25 }),
        };
      case "chipSize":
        return {
          ...styles.chipButtonSize,
          ...(variant === "primary"
            ? { borderRadius: 16 }
            : { borderRadius: 8 }),
        };
      default:
        return {
          ...styles.smButton,
          ...(variant === "primary"
            ? { borderRadius: 8 }
            : { borderRadius: 19 }),
        };
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
        activeOpacity={1}>
        {iconPosition === "left" && (
          <>
            <View style={styles.icon}>{icon}</View>
            <View style={styles.iconTextGap} />
          </>
        )}

        {text && <Text style={[textStyles, style]}>{text}</Text>}

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
