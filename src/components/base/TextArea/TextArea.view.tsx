import { View, Text, StyleSheet, TextInput } from "react-native";
import { TextAreaProps } from "./TextArea.props";
import createStyles from "./TextArea.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";

const TextArea = (props: TextAreaProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { value, setValue, label, placeholder, ...rest } = props;

  return (
    <View>
      <Typography variant="label2" otherStyle={styles.label}>
        {label}
      </Typography>
      <View style={styles.textAreaWrapper}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          autoCapitalize="none"
          style={styles.textAreaField}
          multiline
          {...rest}
        />
      </View>
    </View>
  );
};

export default TextArea;
