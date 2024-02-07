import { View, Text, TouchableOpacity } from "react-native";
import { CheckboxProps } from "./Checkbox.props";
import styles from "./Checkbox.style";
import { Entypo } from "@expo/vector-icons";

const Checkbox = (props: CheckboxProps) => {
  const { checkBoxValue, setCheckBoxValue, label } = props;

  return (
    <TouchableOpacity
      onPress={() => setCheckBoxValue(!checkBoxValue)}
      style={styles.checkboxContainer}
      activeOpacity={1}
    >
      <View style={[styles.checkbox, checkBoxValue && styles.checkedCheckbox]}>
        {checkBoxValue && <Entypo name="check" size={20} color="white" />}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default Checkbox;
