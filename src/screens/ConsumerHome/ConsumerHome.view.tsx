import { View } from "react-native";
import createStyles from "./ConsumerHome.style";
import { ConsumerHomeGeneratedProps } from "./ConsumerHome.props";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import RestaurantCard from "../../components/base/RestaurantCard";
import TextInputField from "../../components/base/TextInputField";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import Typography from "../../components/base/Typography";
import DishCard from "../../components/base/DishCard";
import { ArrowRight } from "../../components/base/SVG";

const ConsumerHome = (props: ConsumerHomeGeneratedProps) => {
  const {
    isRatingsReady,
    isDiscountsReady,
    isMenuDiscountsReady,
    keyword,
    setKeyword,
    merchants,
    ratingsData,
    discountsData,
    menuDiscountsData,
  } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingTop: 16, paddingBottom: 32, gap: 32 }}
    >
      <View style={styles.serchContainer}>
        <TextInputField
          value={keyword}
          leftIcon={<Ionicons name="search" size={24} />}
          setValue={setKeyword}
          rounded
        />
      </View>
      <View style={styles.titleContainer}>
        <Typography variant="title5">Browse Cusines</Typography>
        <ArrowRight />
      </View>
      {merchants && isRatingsReady && isDiscountsReady && (
        <View style={styles.listContainer}>
          {merchants.map((merchant, index) => (
            <RestaurantCard
              imageUrl={merchant.imageUrls[0]}
              restaurantName={merchant.name}
              cost={Number(merchant.cost)}
              rating={
                ratingsData[index].data.reduce(
                  (totalRating, rating) => totalRating + rating.rating,
                  0
                ) / ratingsData[index].data.length || 0
              }
              cuisineType={merchant.cuisineType}
              distance="3.7km"
              cityName="Vancouver"
              coupons={discountsData[index].data.map((discount) => ({
                time: `${new Date(discount.validFromTime).getHours()}:${
                  10 < new Date(discount.validFromTime).getMinutes()
                    ? new Date(discount.validFromTime).getMinutes()
                    : "0" + new Date(discount.validFromTime).getMinutes()
                }`,
                // TODO
                // DB will be changed
                // amount: discount.percentDiscount,
                amount: 30,
              }))}
              key={index}
            />
          ))}
        </View>
      )}
      <View style={styles.titleContainer}>
        <Typography variant="title5">Dishes for you</Typography>
        <ArrowRight />
      </View>
      {isRatingsReady && isMenuDiscountsReady && (
        <View style={styles.listContainer}>
          {menuDiscountsData
            .map((menuDiscountData, index) =>
              menuDiscountData.data.map((menuDiscount, itemIndex) => (
                <DishCard
                  imageUrl={menuDiscount.menu.imageUrl}
                  dishName={menuDiscount.menu.name}
                  rating={
                    ratingsData[index].data.reduce(
                      (totalRating, rating) => totalRating + rating.rating,
                      0
                    ) / ratingsData[index].data.length || 0
                  }
                  cuisineType={menuDiscount.menu.cuisineType}
                  cityName="Vancouver"
                  discountAmount={30}
                  cost={Number(menuDiscount.merchant.cost)}
                  key={itemIndex}
                />
              ))
            )
            .flat()}
        </View>
      )}
    </ScrollView>
  );
};

export default ConsumerHome;
