import { View, Text } from "react-native";
import { AccordionProps } from './Accordion.props';
import createStyles from './Accordion.style';
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";

const Accordion = (props: AccordionProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View>
      <Text> Accordion</Text>
    </View>
  );
};

export default Accordion;
