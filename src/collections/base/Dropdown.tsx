import React, { useState } from "react";
import { View } from "react-native";
import Dropdown from "../../components/base/Dropdown";
import { Option } from "./../../types";

const DropdownCollection: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const options: Option[] = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
  ];

  return (
    <View style={{ padding: 16 }}>
      <Dropdown
        value={value}
        placeholder="Select item"
        setValue={setValue}
        options={options}
      />
    </View>
  );
};

export default DropdownCollection;
