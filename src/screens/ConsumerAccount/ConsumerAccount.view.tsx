import { View, Text } from "react-native";
import createStyles from './ConsumerAccount.style';
import { ConsumerAccountGeneratedProps } from './ConsumerAccount.props';
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";

const ConsumerAccount = (props: ConsumerAccountGeneratedProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View> 
      <Text>ConsumerAccount</Text>
    </View>
  );
};

export default ConsumerAccount;