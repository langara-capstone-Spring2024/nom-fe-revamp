import { StyleSheet, View } from "react-native";
import React from "react";
import Map from "../../components/base/Map";
import { Region } from "react-native-maps";

const MapCollection = () => {
  const initialRegion: Region = {
    latitude: 49.22442010000001,
    longitude: -123.1088805,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  };

  return (
    <View style={styles.container}>
      <Map initialRegion={initialRegion} />
    </View>
  );
};

export default MapCollection;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 1.5,
    padding: 16,
  },
});
