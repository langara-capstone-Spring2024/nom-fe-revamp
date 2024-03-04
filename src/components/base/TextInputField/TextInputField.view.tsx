import { View, Text, TextInput, Pressable } from "react-native";
import { TextInputFieldProps } from "./TextInputField.props";
import styles from "./TextInputField.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import Typography from "../Typography";

const TextInputField = (props: TextInputFieldProps) => {
  const {
    label,
    placeholder,
    value,
    setValue,
    leftIcon,
    rightIcon,
    rounded,
    secured,
    error,
    isDarkMode,
    onRightPress,
    noClear = false,
    ...rest
  } = props;

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
          { borderRadius: rounded ? 24 : 8 },
        ]}>
        {leftIcon && (
          <Text style={{ marginRight: 8, color: "black" }}>{leftIcon}</Text>
        )}
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          secureTextEntry={secured && !isVisible}
          autoCapitalize="none"
          style={styles.textInputField}
          {...rest}
        />
        {!noClear && (
          <Pressable onPress={() => setValue("")} style={{ marginLeft: 8 }}>
            <Ionicons
              name="close-circle"
              size={18}
              style={{ color: "black" }}
            />
          </Pressable>
        )}

        {secured && (
          <Pressable
            onPress={() => setIsVisible((oldValue) => !oldValue)}
            style={{ marginLeft: 8 }}>
            {isVisible ? (
              <Ionicons name="eye" size={18} style={{ color: "black" }} />
            ) : (
              <Ionicons name="eye-off" size={18} style={{ color: "black" }} />
            )}
          </Pressable>
        )}
        {rightIcon && (
          <Pressable onPress={onRightPress}>
            <Text style={{ marginLeft: 8, color: "black" }}>{rightIcon}</Text>
          </Pressable>
        )}
      </View>
      {error && <Typography variant="bodyXs" color="error-medium">{error}</Typography>}
    </View>
  );
};

export default TextInputField;
