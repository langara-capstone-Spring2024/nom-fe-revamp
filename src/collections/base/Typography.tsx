import { View } from "react-native";
import React from "react";
import Typography from "../../components/base/Typography";

const TypographyCollection = () => {
  return (
    <View>
      <Typography
        variant="title1"
        alignment="center"
        color="brand-strong"
        otherStyle={{ fontFamily: "PublicSansBold" }}
      >
        Hello World
      </Typography>
      <Typography
        variant="title2"
        alignment="center"
        color="success-strong"
        otherStyle={{ fontFamily: "PublicSansMedium" }}
      >
        Hello World
      </Typography>
      <Typography variant="title3" alignment="center">
        Hello World
      </Typography>
      <Typography variant="title4" alignment="center">
        Hello World
      </Typography>
      <Typography variant="title5" alignment="center">
        Hello World
      </Typography>
      <Typography variant="body" alignment="center">
        Hello World
      </Typography>
      <Typography variant="bodySm" alignment="center">
        Hello World
      </Typography>
      <Typography variant="bodyXs" alignment="center">
        Hello World
      </Typography>
    </View>
  );
};

export default TypographyCollection;
