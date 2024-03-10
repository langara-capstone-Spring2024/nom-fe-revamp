import { StyleSheet, View } from "react-native";
import React from "react";
import AdTemplateTwo from "../../components/base/AdTemplateTwo";
import { TempTwoPrimary } from "../../components/base/SVG";
import { ScrollView } from "react-native-gesture-handler";

const AdTemplateTwoCollection = () => {
  const aspectRatio = 16 / 9;

  const imageUrl = `https://picsum.photos/${Math.round(
    300 * aspectRatio
  )}/300?random=10`;

  return (
    <ScrollView>
      <View>
        <AdTemplateTwo
        //@ts-ignore
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

export default AdTemplateTwoCollection;

const styles = StyleSheet.create({});
