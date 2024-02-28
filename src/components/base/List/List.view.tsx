import { View, Text } from "react-native";
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
  } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.listWrapper}>
      {hasLeftIcon && leftIcon}
      <View style={styles.content}>
        <Typography>{title}</Typography>
        <View>
          {rightComponent}
          {hasRightIcon && rightIcon}
        </View>
      </View>
    </View>
  );
};

export default List;
