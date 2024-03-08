import { View, Text, ScrollView, Image, StatusBar } from "react-native";
import createStyles from "./RestaurantProfile.style";
import { RestaurantProfileGeneratedProps } from "./RestaurantProfile.props";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import RestaurantDescription from "../../components/base/RestaurantDescription";

const RestaurantProfile = (props: RestaurantProfileGeneratedProps) => {
  const { merchant } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 16, gap: 16 }}
    >
      {merchant && (
        <>
          <View>
            <Image
              source={{ uri: merchant.imageUrls[0] }}
              style={styles.image}
            />
            <View style={{ marginTop: -32, paddingHorizontal: 16 }}>
              <RestaurantDescription
                name={merchant.name}
                address={merchant.address}
                cuisineType={merchant.cuisineType}
                reservationNumber={234}
                cost={Number(merchant.cost)}
                rating={4.6}
                reviewNumber={2300}
              />
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default RestaurantProfile;
