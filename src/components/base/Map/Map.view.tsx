import MapView, { Marker } from "react-native-maps";
import { MapProps } from "./Map.props";
import createStyles from "./Map.style";
import React, { useMemo, useRef } from "react";
import { useTheme } from "react-native-paper";
import { Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Map = (props: MapProps) => {
  const { initialRegion } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const ref = useRef<MapView>(null);

  const handleHome = () => {
    ref.current?.animateToRegion(initialRegion);
  };

  return (
    <View>
      <MapView ref={ref} initialRegion={initialRegion} style={styles.map}>
        <Marker
          coordinate={{
            latitude: initialRegion.latitude,
            longitude: initialRegion.longitude,
          }}
        />
      </MapView>
      <Pressable onPress={handleHome} style={styles.home}>
        <Ionicons name="home" size={18} />
      </Pressable>
    </View>
  );
};

export default Map;
