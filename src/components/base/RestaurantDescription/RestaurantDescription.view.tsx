import { View, Text } from "react-native";
import { RestaurantDescriptionProps } from "./RestaurantDescription.props";
import createStyles from "./RestaurantDescription.style";
import React, { useMemo } from "react";
import { Divider, useTheme } from "react-native-paper";
import Typography from "../Typography";

const RestaurantDescription = (props: RestaurantDescriptionProps) => {
  const { merchant } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 16 }}>
        <View
          style={{
            paddingBottom: 16,
          }}
        >
          <Typography variant="title3">{merchant.name}</Typography>
        </View>
        <View
          style={{
            paddingVertical: 16,
            borderColor: "lightgray",
            borderTopWidth: 0.5,
            borderBottomWidth: 0.5,
          }}
        >
          <Typography>{merchant.address}</Typography>
        </View>
        <View
          style={{
            paddingTop: 16,
          }}
        >
          <Typography>{merchant.name}</Typography>
        </View>
      </View>
      <View
        style={[
          styles.container,
          {
            borderRadius: 16,
            padding: undefined,
            paddingVertical: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          },
        ]}
      >
        <View style={{ flexGrow: 1 }}>
          <View style={{ alignItems: "center" }}>
            <Typography alignment="center">Cost</Typography>
            <Typography>Cost</Typography>
          </View>
        </View>
        <View
          style={{
            borderColor: "lightgray",
            borderLeftWidth: 0.5,
            borderRightWidth: 0.5,
            flexGrow: 1,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Typography>Ratings</Typography>
            <Typography>Ratings</Typography>
          </View>
        </View>
        <View style={{ flexGrow: 1 }}>
          <View style={{ alignItems: "center" }}>
            <Typography>Cost</Typography>
            <Typography>Cost</Typography>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RestaurantDescription;
