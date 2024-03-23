import { View, Text } from "react-native";
import createStyles from './Orders.style';
import { OrdersGeneratedProps } from './Orders.props';
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";

const Orders = (props: OrdersGeneratedProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View> 
      <Text>Orders</Text>
    </View>
  );
};

export default Orders;