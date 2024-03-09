import { Image, LayoutChangeEvent, View } from "react-native";
import createStyles from "./ConsumerHome.style";
import { ConsumerHomeGeneratedProps } from "./ConsumerHome.props";
import React, { useMemo, useRef, useState } from "react";
import { useTheme } from "react-native-paper";
import RestaurantCard from "../../components/base/RestaurantCard";
import TextInputField from "../../components/base/TextInputField";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import Typography from "../../components/base/Typography";
import DishCard from "../../components/base/DishCard";
import { ArrowRight } from "../../components/base/SVG";
import Button from "../../components/base/Button";

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

  const ref = useRef<ScrollView | null>(null);

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [bias, setBais] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const handleLayoutBias = (event: LayoutChangeEvent) => {
    setBais(event.nativeEvent.layout.height);
  };

  const handleLayoutY = (event: LayoutChangeEvent) => {
    setY(event.nativeEvent.layout.y);
  };

  return (
    <ScrollView
      ref={ref}
      style={styles.container}
      contentContainerStyle={{ paddingTop: 16, paddingBottom: 32, gap: 32 }}
      stickyHeaderIndices={[1]}
      onScrollEndDrag={(event) => {
        if (
          ref &&
          ref.current &&
          0 < event.nativeEvent.contentOffset.y &&
          event.nativeEvent.contentOffset.y < y - bias - 33
        ) {
          ref.current.scrollTo({ y: y - bias - 33 });
        }
      }}
    >
      <View style={{ paddingHorizontal: 16, marginBottom: -32 }}>
        <Typography>
          Langara College, West 49th Avenue, Vancouver, BC, Canada
        </Typography>
      </View>
      <View style={styles.serchContainer} onLayout={handleLayoutBias}>
        <TextInputField
          value={keyword}
          leftIcon={<Ionicons name="search" size={28} color="#686868" />}
          setValue={setKeyword}
          bgColor="#E5E5E5"
          sizing="lg"
          rounded
          noborder
          noClear
        />
      </View>
      <ScrollView
        horizontal
        style={{
          marginTop: -32,
          paddingBottom: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#D4D4D4",
        }}
        contentContainerStyle={{ gap: 16, paddingHorizontal: 16 }}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          <Image
            source={require("../../../assets/cuisine/Boba Tea.png")}
            style={{ width: 100, aspectRatio: 1 }}
          />
          <Typography variant="label2" alignment="center">
            Dessert
          </Typography>
        </View>
        <View>
          <Image
            source={require("../../../assets/cuisine/Burger.png")}
            style={{ width: 100, aspectRatio: 1 }}
          />
          <Typography variant="label2" alignment="center">
            Burger
          </Typography>
        </View>
        <View>
          <Image
            source={require("../../../assets/cuisine/Dessert.png")}
            style={{ width: 100, aspectRatio: 1 }}
          />
          <Typography variant="label2" alignment="center">
            Dessert
          </Typography>
        </View>
        <View>
          <Image
            source={require("../../../assets/cuisine/Hot Pot.png")}
            style={{ width: 100, aspectRatio: 1 }}
          />
          <Typography variant="label2" alignment="center">
            Hot Pot
          </Typography>
        </View>
        <View>
          <Image
            source={require("../../../assets/cuisine/Pizza.png")}
            style={{ width: 100, aspectRatio: 1 }}
          />
          <Typography variant="label2" alignment="center">
            Pizza
          </Typography>
        </View>
        <View>
          <Image
            source={require("../../../assets/cuisine/Sushi.png")}
            style={{ width: 100, aspectRatio: 1 }}
          />
          <Typography variant="label2" alignment="center">
            Sushi
          </Typography>
        </View>
        <View>
          <Image
            source={require("../../../assets/cuisine/Taco.png")}
            style={{ width: 100, aspectRatio: 1 }}
          />
          <Typography variant="label2" alignment="center">
            Taco
          </Typography>
        </View>
      </ScrollView>
      <View style={styles.titleContainer} onLayout={handleLayoutY}>
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
                  bordered
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
