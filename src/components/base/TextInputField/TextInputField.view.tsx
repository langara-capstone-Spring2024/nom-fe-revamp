import { View, TextInput, Pressable } from "react-native";
import { TextInputFieldProps } from "./TextInputField.props";
import styles from "./TextInputField.style";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { theme as t } from "../../../utils/Theme";
import Typography from "../Typography";

const TextInputField = (props: TextInputFieldProps) => {
  const {
    label,
    placeholder,
    value,
    setValue,
    leftIcon,
    rightIcon,
    sizing = "md",
    backgroundColor = "white",
    noborder,
    rounded,
    secured,
    error,
    noClear = false,
    onLayout,
    onLeftPress,
    onRightPress,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <View>
      {label && (
        <Typography variant="label2" otherStyle={styles.label}>
          {label}
        </Typography>
      )}
      <View
        style={[
          styles.textInputFieldContainer,
          {
            backgroundColor: backgroundColor,
            borderRadius: rounded ? 32 : 8,
          },
          noborder && { borderWidth: undefined, borderColor: undefined },
          sizing === "sm"
            ? { paddingVertical: 8, paddingHorizontal: 16 }
            : sizing === "lg"
            ? { paddingVertical: 18, paddingHorizontal: 16 }
            : { paddingVertical: 12, paddingHorizontal: 16 },
          !noborder && isFocused && { borderColor: t.Border["info-strong"] },
          !noborder && error
            ? { borderColor: t.Border["error- strong"] }
            : undefined,
        ]}
      >
        {leftIcon && <Pressable onPress={onLeftPress}>{leftIcon}</Pressable>}
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          secureTextEntry={secured && !isVisible}
          autoCapitalize="none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={styles.textInputField}
          {...rest}
        />
        {!noClear && !secured && isFocused && (
          <Pressable onPress={() => setValue("")}>
            <AntDesign
              name="closecircle"
              size={16}
              color={t.Content["content-light"]}
              style={{ alignItems: "center" }}
            />
          </Pressable>
        )}
        {secured && (
          <Pressable onPress={() => setIsVisible((oldValue) => !oldValue)}>
            {isVisible ? (
              <Ionicons name="eye" size={16} color={t.Content.inactive} />
            ) : (
              <Ionicons name="eye-off" size={16} color={t.Content.inactive} />
            )}
          </Pressable>
        )}
        {rightIcon && <Pressable onPress={onRightPress}>{rightIcon}</Pressable>}
      </View>
      {error && (
        <Typography variant="bodyXs" color="error-medium">
          {error}
        </Typography>
      )}
    </View>
  );
};

export default TextInputField;
