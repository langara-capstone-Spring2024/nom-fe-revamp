import { View, Text } from "react-native";
import createStyles from './Promo.style';
import { PromoGeneratedProps } from './Promo.props';
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";

const Promo = (props: PromoGeneratedProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View> 
      <Text>Promo</Text>
    </View>
  );
};

export default Promo;