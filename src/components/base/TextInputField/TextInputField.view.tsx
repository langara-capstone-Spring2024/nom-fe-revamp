import { View, Text, TextInput, Pressable } from "react-native";
import { TextInputFieldProps } from "./TextInputField.props";
import styles from "./TextInputField.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

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
    onRightPress,
  } = props;

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const isDarkMode = false;
  return (
    <View>
      {label && (
        <Text style={[styles.label, { color: isDarkMode ? "white" : "black" }]}>
          {label}
        </Text>
      )}
      <View
        style={[
          styles.textInputFieldContainer,
          { borderRadius: rounded ? 24 : 8 },
        ]}>
        {leftIcon && (
          <Text
            style={{ marginRight: 8, color: isDarkMode ? "white" : "black" }}>
            {leftIcon}
          </Text>
        )}
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          secureTextEntry={secured && !isVisible}
          autoCapitalize="none"
          style={styles.textInputField}
        />
        {secured && (
          <Pressable
            onPress={() => setIsVisible((oldValue) => !oldValue)}
            style={{ marginLeft: 8 }}>
            {isVisible ? (
              <Ionicons
                name="eye"
                size={24}
                style={{ color: isDarkMode ? "white" : "black" }}
              />
            ) : (
              <Ionicons
                name="eye-off"
                size={24}
                style={{ color: isDarkMode ? "white" : "black" }}
              />
            )}
          </Pressable>
        )}
        {rightIcon && (
          <Pressable onPress={onRightPress}>
            <Text
              style={{ marginLeft: 8, color: isDarkMode ? "white" : "black" }}>
              {rightIcon}
            </Text>
          </Pressable>
        )}
      </View>
      {error && <Text style={[styles.error, { color: "red" }]}>{error}</Text>}
    </View>
  );
};

export default TextInputField;
