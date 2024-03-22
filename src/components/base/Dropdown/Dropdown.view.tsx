import React, { useState } from "react";
import { Dropdown as ElementDropdown } from "react-native-element-dropdown";
import styles from "./Dropdown.style";
import { DropdownProps } from "./Dropdown.props";
import { View } from "react-native";
import Typography from "../Typography";
import { theme as t } from "../../../utils/Theme";

const Dropdown = (props: DropdownProps) => {
  const {
    label,
    placeholder,
    sizing = "md",
    options,
    value,
    setValue = () => null,
    error,
  } = props;

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View>
      {label && (
        <Typography variant="label2" otherStyle={styles.label}>
          {label}
        </Typography>
      )}
      <ElementDropdown
        style={[
          styles.dropdown,
          sizing === "sm"
            ? { paddingVertical: 0.5, paddingHorizontal: 16 }
            : sizing === "lg"
            ? { paddingVertical: 10.5, paddingHorizontal: 16 }
            : { paddingVertical: 4.5, paddingHorizontal: 16 },
          isFocused && { borderColor: t.Border["info-strong"] },
        ]}
        data={options}
        maxHeight={150}
        placeholder={placeholder}
        labelField="label"
        valueField="value"
        value={value}
        mode="modal"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(item) => {
          setValue(item.value);
        }}
        placeholderStyle={{ color: t.Content.subtle }}
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
