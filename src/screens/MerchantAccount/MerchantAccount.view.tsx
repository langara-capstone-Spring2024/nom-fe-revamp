import { View, Text } from "react-native";
import createStyles from './MerchantAccount.style';
import { MerchantAccountGeneratedProps } from './MerchantAccount.props';
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";

const MerchantAccount = (props: MerchantAccountGeneratedProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View> 
      <Text>MerchantAccount</Text>
    </View>
  );
};

export default MerchantAccount;