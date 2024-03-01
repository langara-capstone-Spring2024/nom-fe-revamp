import { View, Image, TouchableOpacity, Alert, Button } from "react-native";
import { AgendaItemProps } from "./AgendaItem.props";
import createStyles from "./AgendaItem.style";
import React, { useMemo, useCallback } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";
import MenuIcon from "../../../../assets/menu.png";
import CouponIcon from "../../../../assets/red_coupon.png";

const AgendaItem = (props: AgendaItemProps) => {
  const { item } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const itemPressed = useCallback(() => {
    Alert.alert(item.title);
  }, []);

  const buttonPressed = useCallback(() => {
    Alert.alert("Show me more");
  }, []);

  return (
    <TouchableOpacity
      onPress={itemPressed}
      style={[styles.item, styles.wrapper]}
    >
      <View>
        <Typography otherStyle={styles.itemHourText}>{item.hour}</Typography>
        <Typography>{item.endTime}</Typography>
      </View>
      <View>
        <View></View>
      </View>
      <View>
        <Typography>{item.discount}% Off</Typography>
        <View>
          {item.menuCount && (
            <View>
              <Image source={MenuIcon} />
              <Typography>{item.menuCount}</Typography>
            </View>
          )}
          {item.discountCount && (
            <View>
              <Image source={CouponIcon} />
              <Typography>{item.discountCount}</Typography>
            </View>
          )}
        </View>
        <View style={styles.itemButtonContainer}>
          <Button title={"Info"} onPress={buttonPressed} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(AgendaItem);
