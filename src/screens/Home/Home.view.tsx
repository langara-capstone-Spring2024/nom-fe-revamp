import { View, Text } from "react-native";
import createStyles from "./Home.style";
import { HomeGeneratedProps } from "./Home.props";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";

const Home = (props: HomeGeneratedProps) => {
  const { role } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View>
      {role ? (
        role === "consumer" ? (
          <Text>Consumer's Home</Text>
        ) : role === "merchant" ? (
          <Text style={{backgroundColor: 'red', height: 100}}>Merchant's Home</Text>
        ) : (
          <Text>Who are you?</Text>
        )
      ) : (
        <Text>Login, please</Text>
      )}
    </View>
  );
};

export default Home;
