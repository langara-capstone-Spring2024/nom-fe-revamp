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
    hasBottomDescription,
    bottomDescription,
    style,
  } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={[styles.listWrapper, !hasLeftIcon && { gap: 0 }, style]}>
      <View>{hasLeftIcon && leftIcon}</View>

      <View
        style={[
          styles.contentWrapper,
          isLast ? null : { borderBottomWidth: 1 },
        ]}
      >
        <View>
          <Typography>{title}</Typography>
          {hasBottomDescription && (
            <Typography variant="bodyXs">{bottomDescription}</Typography>
          )}
        </View>

        <View style={styles.contentRight}>
          {rightComponent}
          {hasRightIcon && rightIcon}
        </View>
      </View>
    </View>
  );
};

export default List;
