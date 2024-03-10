import { StyleSheet, View } from "react-native";
import React from "react";
import AdTemplateOne from "../../components/base/AdTemplateOne";

const AdTemplateOneCollection = () => {
  return (
    <View>
      <AdTemplateOne
        //@ts-ignore
        uri={imageUrl}
        headline="Up to 50% off!"
        tagline="Lorem ipsum dolor sit amet est officiis."
        variant={2}
        primary="#FFBF41"
        secondary="#3C3C3C"
      />
    </View>
  );
};

export default AdTemplateOneCollection;

const styles = StyleSheet.create({});
