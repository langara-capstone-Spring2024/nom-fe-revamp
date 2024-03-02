import { TouchableOpacity, View } from "react-native";
import { ListProps } from "./List.props";
import createStyles from "./List.style";
import React, { useMemo, useState } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";
import Chips from "../Chips";

const List = (props: ListProps) => {
  const {
    hasLeftIcon,
    leftIcon,
    title,
    hasRightComponent,
    rightComponent,
    hasRightIcon,
    rightIcon,
    isLast,
    hasBottomDescription,
    bottomDescription,
    style,
    hiddenComponent,
  } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [isVisible, setIsVisible] = useState(false);
  const [label, setLabel] = useState("+");
  //const [formattedValue, setFormattedValue] = useState("+");

  const rightComponentClick = () => {
    setIsVisible(!isVisible);
  };

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
            <Typography>{title}</Typography>
            {hasBottomDescription && (
              <Typography variant="bodyXs">{bottomDescription}</Typography>
            )}
          </View>

          <View style={styles.contentRight}>
            {hasRightComponent && (
              <TouchableOpacity onPress={rightComponentClick}>
                <Chips label={label} />
              </TouchableOpacity>
            )}

            {hasRightIcon && rightIcon}
          </View>
        </View>
      </View>
      <View>
        {isVisible &&
          React.cloneElement(hiddenComponent as React.ReactElement, {
            updateLabel: setLabel,
            //updateFormattedValue: setFormattedValue,
          })}
      </View>
    </>
  );
};

export default List;
