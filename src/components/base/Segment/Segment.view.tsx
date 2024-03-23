import { View, ScrollView, Pressable } from "react-native";
import { SegmentProps } from "./Segment.props";
import createStyles from "./Segment.style";
import React, { useMemo, useState } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";
import { Option } from "../../../types";

const Segment = (props: SegmentProps) => {
  const { option, options, onSelect = () => null } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [selectedOption, setSelectedOption] = useState<Option>(option);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <ScrollView
      contentContainerStyle={{ gap: 4 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {options.map((optionItem, itemIndex) => (
        <Pressable
          onPress={() => handleSelect(optionItem)}
          style={styles.optionContainer}
          key={itemIndex}
        >
          <View
            style={[
              { paddingVertical: 4 },
              optionItem.value === selectedOption.value && {
                borderBottomWidth: 2,
                borderBottomColor: "#FF6173",
              },
            ]}
          >
            <Typography
              color={
                optionItem.value === selectedOption.value
                  ? "brand-medium"
                  : "subtle"
              }
            >
              {optionItem.label}
            </Typography>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default Segment;
