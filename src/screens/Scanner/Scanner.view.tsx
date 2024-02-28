import { View, Text } from "react-native";
import createStyles from './Scanner.style';
import { ScannerGeneratedProps } from './Scanner.props';
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";

const Scanner = (props: ScannerGeneratedProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View> 
      <Text>Scanner</Text>
    </View>
  );
};

export default Scanner;