import React, { useState } from "react";
import { Dropdown as ElementDropdown } from "react-native-element-dropdown";
import styles from "./Dropdown.style";
import { DropdownProps } from "./Dropdown.props";
import { View } from "react-native";
import Typography from "../Typography";

const Dropdown = (props: DropdownProps) => {
  const { label, placeholder, value, setValue, options, error } = props;

  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <View>
      {label && (
        <Typography variant="label2" otherStyle={styles.label}>
          {label}
        </Typography>
      )}
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
      {error && (
        <Typography variant="bodyXs" color="error-medium">
          {error}
        </Typography>
      )}
    </View>
  );
};

export default Dropdown;
