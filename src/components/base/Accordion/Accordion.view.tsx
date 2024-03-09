import { View, Text, TouchableOpacity, LayoutAnimation } from "react-native";
import { AccordionProps } from "./Accordion.props";
import createStyles from "./Accordion.style";
import React, { useMemo, useLayoutEffect } from "react";
import { useTheme, List } from "react-native-paper";
import Typography from "../Typography";
import { Entypo } from "@expo/vector-icons";
import { theme as t } from "./../../../utils/Theme";

const Accordion = (props: AccordionProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {
    title,
    children,
    hasLeftItem,
    leftItem,
    hasRightItem,
    rightItem,
    expanded: initialState,
  } = props;

  const [expanded, setExpanded] = React.useState(initialState || false);
  const [visibleChildren, setVisibleChildren] = React.useState(
    expanded || false
  );

  const handlePress = () => {
    setVisibleChildren(!visibleChildren);
    setExpanded(!expanded);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={handlePress}
          style={styles.headerContent}
          activeOpacity={1}
        >
          <View style={styles.leftComponent}>
            {hasLeftItem && leftItem}
            <Typography>{title}</Typography>
          </View>
          <View style={styles.rightComponent}>
            {hasRightItem && rightItem}
            {expanded ? (
              <Entypo
                name="chevron-small-up"
                size={24}
                color={t.Content.inactive}
              />
            ) : (
              <Entypo
                name="chevron-small-down"
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
        {visibleChildren && children}
      </View>
    </View>
  );
};

export default Accordion;
