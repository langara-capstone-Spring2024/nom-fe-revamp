import { View, Text } from "react-native";
import { AdTemplateThreeProps } from './AdTemplateThree.props';
import createStyles from './AdTemplateThree.style';
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";

const AdTemplateThree = (props: AdTemplateThreeProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View>
      <Text> AdTemplateThree</Text>
    </View>
  );
};

export default AdTemplateThree;
