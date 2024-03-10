import { View, Text } from "react-native";
import createStyles from './MerchantHome.style';
import { MerchantHomeGeneratedProps } from './MerchantHome.props';
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";

const MerchantHome = (props: MerchantHomeGeneratedProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View> 
      <Text>MerchantHome</Text>
    </View>
  );
};

export default MerchantHome;