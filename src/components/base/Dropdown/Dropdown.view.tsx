import React, { useState } from "react";
import { Dropdown as ElementDropdown } from "react-native-element-dropdown";
import styles from "./Dropdown.style";
import { DropdownProps } from "./Dropdown.props";
import { Text, View } from "react-native";

const Dropdown = (props: DropdownProps) => {
  const { label, placeholder, value, setValue, options, error } = props;

  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <ElementDropdown
        style={[styles.dropdown, isFocused && { borderColor: "blue" }]}
        data={options}
        placeholder={placeholder}
        maxHeight={300}
        labelField="label"
        valueField="value"
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(item) => {
          setValue?.(item.value);
          setIsFocused(false);
        }}
      />
      {error && <Text style={[styles.error, { color: "red" }]}>{error}</Text>}
    </View>
  );
};

export default Dropdown;
