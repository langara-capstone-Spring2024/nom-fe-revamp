import { View } from "react-native";
import createStyles from "./ConsumerHome.style";
import { ConsumerHomeGeneratedProps } from "./ConsumerHome.props";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import RestaurantCard from "../../components/base/RestaurantCard";
import TextInputField from "../../components/base/TextInputField";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

const ConsumerHome = (props: ConsumerHomeGeneratedProps) => {
  const {
    isRatingsReady,
    isDiscountsReady,
    keyword,
    setKeyword,
    merchants,
    ratings,
    discounts,
  } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingVertical: 16, gap: 16 }}
    >
      <View style={styles.serchContainer}>
        <TextInputField
          value={keyword}
          leftIcon={<Ionicons name="search" size={24} />}
          setValue={setKeyword}
          rounded
        />
      </View>
      {merchants && isRatingsReady && isDiscountsReady && (
        <View style={styles.merchantsContainer}>
          {merchants.map((merchant, index) => (
            <RestaurantCard
              imageUrl={merchant.imageUrls[0]}
              restaurantName={merchant.name}
              cost={Number(merchant.cost)}
              rating={
                ratings[index].data.reduce(
                  (totalRating, rating) => totalRating + rating.rating,
                  0
                ) / ratings[index].data.length || 0
              }
              cuisineType={merchant.cuisineType}
              distance="3.7km"
              cityName="Vancouver"
              coupons={discounts[index].data.map((discount) => ({
                time: `${new Date(discount.validFromTime).getHours()}:${
                  10 < new Date(discount.validFromTime).getMinutes()
                    ? new Date(discount.validFromTime).getMinutes()
                    : "0" + new Date(discount.validFromTime).getMinutes()
                }`,
                amount: 30,
                // TODO
                // DB will be changed
                // amount: discount.percentDiscount,
              }))}
              key={index}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default ConsumerHome;
