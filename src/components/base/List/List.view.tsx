import { View } from "react-native";
import { ListProps } from "./List.props";
import createStyles from "./List.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";

const List = (props: ListProps) => {
  const {
    hasLeftIcon,
    leftIcon,
    title,
    rightComponent,
    hasRightIcon,
    rightIcon,
    isLast,
  } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.listWrapper}>
      <View>{hasLeftIcon && leftIcon}</View>

      <View
        style={[
          styles.contentWrapper,
          isLast ? null : { borderBottomWidth: 1 },
        ]}
      >
        <Typography>{title}</Typography>
        <View style={styles.contentRight}>
          {rightComponent}
          {hasRightIcon && rightIcon}
        </View>
      </View>
    </View>
  );
};

export default List;
