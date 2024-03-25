import { TouchableOpacity, View } from "react-native";
import { ListProps } from "./List.props";
import createStyles from "./List.style";
import React, { useMemo, useState } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";
import Chips from "../Chips";

const List = (props: ListProps) => {
  const {
    title,
    hasLeftIcon,
    leftIcon,
    hasRightIcon,
    rightIcon,
    hasRightComponent,
    rightComponent,
    handleRightComponentClick,
    isLast,
    hasBottomDescription,
    bottomDescription,
    hiddenComponent,
    hiddenComponentIsVisible,
    style,
    titleColor,
    disabled,
  } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <>
      <View style={[styles.listWrapper, !hasLeftIcon && { gap: 0 }, style]}>
        <View>{hasLeftIcon && leftIcon}</View>

        <View
          style={[
            styles.contentWrapper,
            isLast ? null : { borderBottomWidth: 1 },
          ]}
        >
          <View>
            <Typography color={titleColor}>{title}</Typography>
            {hasBottomDescription && (
              <Typography variant="bodyXs">{bottomDescription}</Typography>
            )}
          </View>

          <View style={styles.contentRight}>
            {hasRightComponent && (
              <TouchableOpacity
                onPress={handleRightComponentClick}
                disabled={disabled}
              >
                {typeof rightComponent === "function"
                  ? rightComponent()
                  : rightComponent}
              </TouchableOpacity>
            )}

            {hasRightIcon && rightIcon}
          </View>
        </View>
      </View>
      <View>{hiddenComponentIsVisible && hiddenComponent}</View>
    </>
  );
};

export default List;
