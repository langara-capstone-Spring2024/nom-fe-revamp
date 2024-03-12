import { View, Text } from "react-native";
import { OrderCardProps } from "./OrderCard.props";
import createStyles from "./OrderCard.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";

const OrderCard = (props: OrderCardProps) => {
  const {
    customerName,
    couponNo,
    discount,
    date,
    status,
    operation,
    validFromTime,
    validToTime,
  } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const formatTime = (time: Date) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
    } as Intl.DateTimeFormatOptions;
    return time.toLocaleTimeString("en-US", options);
  };

  const formattedValidTime = `${formatTime(validFromTime)} - ${formatTime(
    validToTime
  )}`;

  const formattedDate = (date: Date) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "2-digit",
    } as Intl.DateTimeFormatOptions;
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Typography variant="title5" alignment="left" color="primary">
          {customerName}
        </Typography>
      </View>
      <View style={styles.middleContainer}>
        <View>
          <View style={styles.firstRow}>
            <Typography variant="body" alignment="left" color="subtle">
              Coupon No.
            </Typography>
            <Typography variant="body" alignment="left" color="medium">
              #{couponNo}
            </Typography>
          </View>
          <Typography variant="body" alignment="left" color="subtle">
            Date
          </Typography>
          <Typography variant="body" alignment="left" color="medium">
            {formattedDate(date)}
          </Typography>
        </View>
        <View>
          <View style={styles.firstRow}>
            <Typography variant="body" alignment="left" color="subtle">
              Discount
            </Typography>
            <Typography variant="body" alignment="left" color="primary">
              {discount}% Off
            </Typography>
          </View>
          <Typography variant="body" alignment="left" color="subtle">
            Time
          </Typography>
          <Typography variant="body" alignment="left" color="primary">
            {formattedValidTime}
          </Typography>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Typography variant="body" alignment="left" color="subtle">
            Status
          </Typography>
          <Typography variant="body" alignment="left" color="warning-strong">
            {status}
          </Typography>
        </View>
        <View>
          <Typography variant="body" alignment="left" color="subtle">
            Operation
          </Typography>
          <Typography variant="body" alignment="left" color="primary">
            {status === "Upcoming" ? "N/A" : formatTime(operation)}
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default OrderCard;
