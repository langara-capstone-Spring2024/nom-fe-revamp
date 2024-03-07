import { StyleSheet, View } from "react-native";
import React from "react";
import AdTemplate from "../../components/base/AdTemplate";
import { TempTwo } from "../../components/base/SVG";

const AdTemplateCollection = () => {
  const aspectRatio = 16 / 9;

  const imageUrl = `https://picsum.photos/${Math.round(
    300 * aspectRatio
  )}/300?random=10`;

  return (
    <View>
      <AdTemplate
        uri={imageUrl}
        headline="Nam quis in te nulla."
        tagline="Lorem ipsum dolor sit amet est officiis."
        variant={1}
      />
    </View>
  );
};

export default AdTemplateCollection;

const styles = StyleSheet.create({});
