import React, { useState } from "react";
import { Dropdown as ElementDropdown } from "react-native-element-dropdown";
import styles from "./Dropdown.style";
import { DropdownProps } from "./Dropdown.props";

const Dropdown = (props: DropdownProps) => {
  const { placeholder, value, setValue, options } = props;

  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
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
  );
};

export default Dropdown;
