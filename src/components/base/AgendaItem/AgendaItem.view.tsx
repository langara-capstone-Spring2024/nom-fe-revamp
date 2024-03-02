import { View, Image, TouchableOpacity, Alert, Button } from "react-native";
import { AgendaItemProps } from "./AgendaItem.props";
import createStyles from "./AgendaItem.style";
import React, { useMemo, useCallback } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";
import MenuIcon from "../../../../assets/menu.png";
import CouponIcon from "../../../../assets/red_coupon.png";
import { theme as t } from "../../../utils/Theme";

const AgendaItem = (props: AgendaItemProps) => {
  const { item } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.date}>
        <Typography otherStyle={styles.itemHourText}>
          {item.startTime}
        </Typography>
        <Typography variant="bodySm" color="subtle">
          {item.endTime}
        </Typography>
      </View>
      <View style={styles.bar}>
        <View></View>
      </View>
      <View style={styles.rightContent}>
        <Typography>{item.discount}% Off</Typography>
        <View style={[styles.flex, styles.subtext]}>
          {item.menuCount && (
            <View style={[styles.flex, styles.menu]}>
              <Image source={MenuIcon} />
              <Typography variant="bodySm" color="subtle">
                {item.menuCount} Items
              </Typography>
            </View>
          )}
          {item.discountCount && (
            <View style={[styles.flex, styles.discount]}>
              <Image source={CouponIcon} />
              <Typography variant="bodySm" color="subtle">
                {item.discountCount} Total
              </Typography>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(AgendaItem);
