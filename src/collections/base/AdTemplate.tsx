import { StyleSheet, View } from "react-native";
import React from "react";
import AdTemplate from "../../components/base/AdTemplate";
import { TempTwoPrimary } from "../../components/base/SVG";
import { ScrollView } from "react-native-gesture-handler";

const AdTemplateCollection = () => {
  const aspectRatio = 16 / 9;

  const imageUrl = `https://picsum.photos/${Math.round(
    300 * aspectRatio
  )}/300?random=10`;

  return (
    <ScrollView>
      <AdTemplate
        uri={imageUrl}
        headline="Nam quis in te nulla."
        tagline="Lorem ipsum dolor sit amet est officiis."
        variant={1}
      />
      <TempTwoPrimary width={216} height={200} fill="pink" />
    </ScrollView>
  );
};

export default AdTemplateCollection;

const styles = StyleSheet.create({});
