import { View, Text } from "react-native";
import createStyles from "./Account.style";
import { AccountGeneratedProps } from "./Account.props";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";

const Account = (props: AccountGeneratedProps) => {
  const { role } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View>
      {role ? (
        role === "consumer" ? (
          <Text>Consumer's Account</Text>
        ) : role === "merchant" ? (
          <Text>Merchant's Account</Text>
        ) : (
          <Text>Who are you?</Text>
        )
      ) : (
        <Text>Login, please</Text>
      )}
    </View>
  );
};

export default Account;
