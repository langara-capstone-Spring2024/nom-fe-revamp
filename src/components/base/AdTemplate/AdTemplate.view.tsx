import { View, Text, Image } from "react-native";
import { AdTemplateProps } from "./AdTemplate.props";
import createStyles from "./AdTemplate.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";
import { TempTwo } from "../SVG";

const AdTemplate = (props: AdTemplateProps) => {
  const { uri, headline, tagline, variant } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      {variant === 1 && (
        <>
          <View style={styles.tempOneAccent} />
          <View style={styles.tempOnePrimary} />
          <View style={styles.tempOnePrimaryRec} />
          <Typography variant="title4" otherStyle={styles.tempOneHeadline}>
            {headline}
          </Typography>
          <Typography variant="bodyXs" otherStyle={styles.tempOneTagline}>
            {tagline}
          </Typography>
        </>
      )}
      <Image source={{ uri }} style={styles.image} />
      <TempTwo />
    </View>
  );
};

export default AdTemplate;
