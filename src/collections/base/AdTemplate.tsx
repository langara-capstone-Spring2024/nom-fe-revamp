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
      <View>
        <AdTemplate
          uri={imageUrl}
          headline="Up to 50% off!"
          tagline="Lorem ipsum dolor sit amet est officiis."
          variant={2}
          primary="#FFBF41"
          secondary="#3C3C3C"
        />
      </View>
    </ScrollView>
  );
};

export default AdTemplateCollection;

const styles = StyleSheet.create({});
