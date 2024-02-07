import { View } from "react-native";
import React from "react";
import Typography from "../../components/base/Typography";

const TypographyCollection = () => {
  return (
    <View>
      <Typography
        variant="title1"
        alignment="center"
        weight="700"
        otherStyle={{
          fontFamily: "PublicSansItalic",
          color: "pink",
        }}
      >
        Hello World
      </Typography>
      <Typography
        variant="title2"
        alignment="center"
        weight="700"
        otherStyle={{ fontFamily: "PublicSansRegular" }}
      >
        Hello World
      </Typography>
      <Typography variant="title3" alignment="center" weight="700">
        Hello World
      </Typography>
      <Typography variant="title4" alignment="center" weight="700">
        Hello World
      </Typography>
      <Typography variant="title5" alignment="center" weight="700">
        Hello World
      </Typography>
      <Typography variant="body" alignment="center" weight="700">
        Hello World
      </Typography>
      <Typography variant="bodySm" alignment="center" weight="700">
        Hello World
      </Typography>
      <Typography variant="bodyXs" alignment="center" weight="700">
        Hello World
      </Typography>
    </View>
  );
};

export default TypographyCollection;
