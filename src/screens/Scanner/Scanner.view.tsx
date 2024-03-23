import { View, Text } from "react-native";
import createStyles from "./Scanner.style";
import { ScannerGeneratedProps } from "./Scanner.props";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import ScannerComponent from "../../components/module/Scanner";

const Scanner = (props: ScannerGeneratedProps) => {
  const { handleChange, handleClose, handleSuccess } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <ScannerComponent
      onChange={handleChange}
      onClose={handleClose}
      onSuccess={handleSuccess}
    />
  );
};

export default Scanner;
