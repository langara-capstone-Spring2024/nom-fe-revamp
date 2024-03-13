import {
  ActivityIndicator,
  Image,
  LayoutChangeEvent,
  Pressable,
  RefreshControl,
  SafeAreaView,
  View,
} from "react-native";
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
import { Arrow } from "../../components/base/SVG";
import NavigationService from "../../navigation/NavigationService";

const ConsumerHome = (props: ConsumerHomeGeneratedProps) => {
  const {
    isFetchingMerchants,
    isRatingsReady,
    isDiscountsReady,
    isMenuDiscountsReady,
    isRefreshing,
    keyword,
    setKeyword,
    merchants,
    ratingsData,
    discountsData,
    menuDiscountsData,
    handleRefresh,
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
    <SafeAreaView>
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
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      >
        <View style={styles.addressContainer}>
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
          style={styles.cuisineTypesContainer}
          contentContainerStyle={{ gap: 16, paddingHorizontal: 16 }}
          showsHorizontalScrollIndicator={false}
        >
          <View>
            <Image
              source={require("../../../assets/cuisine/Boba Tea.png")}
              style={styles.cuisineType}
            />
            <Typography variant="label2" alignment="center">
              Dessert
            </Typography>
          </View>
          <View>
            <Image
              source={require("../../../assets/cuisine/Burger.png")}
              style={styles.cuisineType}
            />
            <Typography variant="label2" alignment="center">
              Burger
            </Typography>
          </View>
          <View>
            <Image
              source={require("../../../assets/cuisine/Dessert.png")}
              style={styles.cuisineType}
            />
            <Typography variant="label2" alignment="center">
              Dessert
            </Typography>
          </View>
          <View>
            <Image
              source={require("../../../assets/cuisine/Hot Pot.png")}
              style={styles.cuisineType}
            />
            <Typography variant="label2" alignment="center">
              Hot Pot
            </Typography>
          </View>
          <View>
            <Image
              source={require("../../../assets/cuisine/Pizza.png")}
              style={styles.cuisineType}
            />
            <Typography variant="label2" alignment="center">
              Pizza
            </Typography>
          </View>
          <View>
            <Image
              source={require("../../../assets/cuisine/Sushi.png")}
              style={styles.cuisineType}
            />
            <Typography variant="label2" alignment="center">
              Sushi
            </Typography>
          </View>
          <View>
            <Image
              source={require("../../../assets/cuisine/Taco.png")}
              style={styles.cuisineType}
            />
            <Typography variant="label2" alignment="center">
              Taco
            </Typography>
          </View>
        </ScrollView>
        <View style={styles.titleContainer} onLayout={handleLayoutY}>
          <Typography variant="title5">Browse Cusines</Typography>
          <Arrow />
        </View>
        {!isFetchingMerchants ? (
          <>
            {0 < merchants.length ? (
              <>
                {isRatingsReady && isDiscountsReady && isMenuDiscountsReady && (
                  <>
                    <View style={styles.listContainer}>
                      {merchants.map((merchant, merchantItemIndex) => (
                        <Pressable
                          onPress={() =>
                            NavigationService.navigate("RestaurantProfile", {
                              merchantId: merchant._id,
                            })
                          }
                          key={merchantItemIndex}
                        >
                          <RestaurantCard
                            imageUrl={merchant.imageUrls[0]}
                            restaurantName={merchant.name}
                            cost={merchant.cost}
                            rating={
                              ratingsData[merchantItemIndex].data.reduce(
                                (totalRating, rating) =>
                                  totalRating + rating.rating,
                                0
                              ) / ratingsData[merchantItemIndex].data.length ||
                              0
                            }
                            cuisineType={merchant.cuisineType}
                            distance="3.7km"
                            cityName="Vancouver"
                            coupons={discountsData[merchantItemIndex].data.map(
                              (discount) => ({
                                time: `${new Date(
                                  discount.validFromTime
                                ).getHours()}:${
                                  10 <
                                  new Date(discount.validFromTime).getMinutes()
                                    ? new Date(
                                        discount.validFromTime
                                      ).getMinutes()
                                    : "0" +
                                      new Date(
                                        discount.validFromTime
                                      ).getMinutes()
                                }`,
                                amount: discount.percentDiscount * 100,
                              })
                            )}
                          />
                        </Pressable>
                      ))}
                    </View>
                    <View style={styles.titleContainer}>
                      <Typography variant="title5">Dishes for you</Typography>
                      <Arrow />
                    </View>
                    <View style={styles.listContainer}>
                      {0 <
                      merchants
                        .map((merchant, merchantItemIndex) =>
                          menuDiscountsData[merchantItemIndex].data.map(
                            (menuDiscount, menuDiscountItemIndex) => <></>
                          )
                        )
                        .flat().length ? (
                        merchants
                          .map((merchant, merchantItemIndex) =>
                            menuDiscountsData[merchantItemIndex].data.map(
                              (menuDiscount, menuDiscountItemIndex) => (
                                <DishCard
                                  imageUrl={menuDiscount.menu.imageUrl}
                                  dishName={menuDiscount.menu.name}
                                  rating={
                                    ratingsData[merchantItemIndex].data.reduce(
                                      (totalRating, rating) =>
                                        totalRating + rating.rating,
                                      0
                                    ) /
                                      ratingsData[merchantItemIndex].data
                                        .length || 0
                                  }
                                  cuisineType={menuDiscount.menu.cuisineType}
                                  cityName="Vancouver"
                                  discountAmount={30}
                                  cost={menuDiscount.merchant.cost}
                                  bordered
                                  key={menuDiscountItemIndex}
                                />
                              )
                            )
                          )
                          .flat()
                      ) : (
                        <Typography alignment="center">No results</Typography>
                      )}
                    </View>
                  </>
                )}
              </>
            ) : (
              <Typography alignment="center">No results</Typography>
            )}
          </>
        ) : (
          <ActivityIndicator />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConsumerHome;
