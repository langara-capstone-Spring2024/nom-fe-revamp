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
    isDarkMode,
    onRightPress,
  } = props;

  const [isVisible, setIsVisible] = useState<boolean>(false);

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
        ]}
      >
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
        />
        {secured && (
          <Pressable
            onPress={() => setIsVisible((oldValue) => !oldValue)}
            style={{ marginLeft: 8 }}
          >
            {isVisible ? (
              <Ionicons name="eye" size={24} style={{ color: "black" }} />
            ) : (
              <Ionicons name="eye-off" size={24} style={{ color: "black" }} />
            )}
          </Pressable>
        )}
        {rightIcon && (
          <Pressable onPress={onRightPress}>
            <Text style={{ marginLeft: 8, color: "black" }}>{rightIcon}</Text>
          </Pressable>
        )}
      </View>
      {error && <Text style={[styles.error, { color: "red" }]}>{error}</Text>}
    </View>
  );
};

export default TextInputField;
