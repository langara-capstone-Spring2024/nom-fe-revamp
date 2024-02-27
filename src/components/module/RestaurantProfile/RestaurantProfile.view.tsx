import { View, Text } from "react-native";
import { RestaurantProfileProps } from "./RestaurantProfile.props";
import createStyles from "./RestaurantProfile.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import { Image } from "react-native-elements";
import RestaurantDescription from "../../base/RestaurantDescription";

const RestaurantProfile = (props: RestaurantProfileProps) => {
  const { merchant } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <>
      <Image
        source={{ uri: merchant.user.image }}
        style={{ width: "100%", aspectRatio: 1.5 }}
      />
      <View
        style={{
          marginTop: -32,
          paddingHorizontal: 16,
        }}
      >
        <RestaurantDescription merchant={merchant} />
      </View>
    </>
  );
};

export default RestaurantProfile;
