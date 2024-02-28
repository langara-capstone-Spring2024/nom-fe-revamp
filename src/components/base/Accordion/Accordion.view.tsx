import { View, Text, TouchableOpacity } from "react-native";
import { AccordionProps } from "./Accordion.props";
import createStyles from "./Accordion.style";
import React, { useMemo } from "react";
import { useTheme, List } from "react-native-paper";
import Typography from "../Typography";
import { Entypo } from "@expo/vector-icons";
import { theme as t } from "./../../../utils/Theme";

const Accordion = (props: AccordionProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { title, children, hasLeftItem, leftItem, hasRightItem, rightItem } =
    props;

  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.headerContent}>
          <View style={styles.leftComponent}>
            {hasLeftItem && leftItem}
            <Typography>{title}</Typography>
          </View>
          <View style={styles.rightComponent}>
            {hasRightItem && rightItem}
            {expanded ? (
              <Entypo
                name="chevron-small-down"
                size={24}
                color={t.Content.inactive}
              />
            ) : (
              <Entypo
                name="chevron-small-up"
                size={24}
                color={t.Content.inactive}
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.accordionList,
          expanded ? { borderTopWidth: 0.5 } : null,
        ]}
      >
        {expanded && children}
      </View>
    </View>
  );
};

export default Accordion;
