import {
  View,
  ScrollView,
  Image,
  RefreshControl,
  Pressable,
  LayoutChangeEvent,
} from "react-native";
import createStyles from "./RestaurantProfile.style";
import { RestaurantProfileGeneratedProps } from "./RestaurantProfile.props";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "react-native-paper";
import RestaurantDescription from "../../components/base/RestaurantDescription";
import ReviewCard from "../../components/base/ReviewCard";
import Typography from "../../components/base/Typography";
import RestaurantDetail from "../../components/base/RestaurantDetail";
import RatingBars from "../../components/base/RatingBars";
import CouponCarousel from "../../components/base/CouponCarousel";
import { Rating } from "react-native-ratings";
import NavigationService from "../../navigation/NavigationService";
import Button from "../../components/base/Button";
import Segment from "../../components/base/Segment";
import { useNavigation } from "@react-navigation/native";
import { Option } from "../../types";
import { AntDesign } from "@expo/vector-icons";

const RestaurantProfile = (props: RestaurantProfileGeneratedProps) => {
  const {
    isRefreshing,
    selectedCoupon,
    merchant,
    consumerDiscounts,
    discounts,
    menuDiscounts,
    ratings,
    handleRefresh,
    handleSelectCoupon,
    handleNext,
  } = props;

  const navigation = useNavigation();
  const ref = useRef<ScrollView | null>(null);

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const options: Option[] = [
    { label: "Reservations", value: "reservations" },
    { label: "Featured Menu", value: "featured-menu" },
    { label: "Reviews", value: "reviews" },
    { label: "Details", value: "details" },
  ];

  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [option, setOption] = useState<Option>({
    label: "Reservations",
    value: "reservations",
  });
  const [menuY, setMenuY] = useState<number | undefined>(undefined);
  const [ratingsY, setRatingsY] = useState<number | undefined>(undefined);
  const [detailsY, setDetailsY] = useState<number | undefined>(undefined);

  const handleSelectSegment = (option: Option) => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: () => {
        return (
          <Pressable
            onPress={() => {
              navigation.setOptions({ headerShown: false });
              setIsZoomed(false);
              ref.current?.scrollTo({ y: 0 });
            }}
            style={{ paddingLeft: 16, margin: 8 }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>
        );
      },
    });
    setOption(option);
    setIsZoomed(true);
  };

  useEffect(() => {
    if (isZoomed && ratingsY && detailsY) {
      if (option.value === "reservations") {
        ref.current?.scrollTo({ y: 0 });
      } else if (option.value === "featured-menu") {
        ref.current?.scrollTo({ y: menuY });
      } else if (option.value === "reviews") {
        ref.current?.scrollTo({ y: ratingsY });
      } else if (option.value === "details") {
        ref.current?.scrollTo({ y: detailsY });
      }
    }
  }, [isZoomed, option, menuY, ratingsY, detailsY]);

  return (
    <>
      {isZoomed && (
        <View
          style={[
            styles.sectionContainer,
            { position: "absolute", paddingBottom: 0 },
          ]}
        >
          <View style={styles.sectionBodyContainer}>
            <View style={styles.segmentContainer}>
              <Segment
                option={option}
                options={options}
                onSelect={handleSelectSegment}
              />
            </View>
          </View>
        </View>
      )}
      <ScrollView
        ref={ref}
        style={[styles.container, isZoomed && { marginTop: 48 }]}
        contentContainerStyle={{ gap: 8, paddingBottom: 112 }}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            progressViewOffset={40}
            style={isRefreshing && { marginBottom: 64 }}
          />
        }
      >
        {merchant && (
          <>
            {isZoomed ? (
              <>
                {discounts.length !== 0 && (
                  <View style={styles.sectionContainer}>
                    <View style={styles.sectionBodyContainer}>
                      <View style={styles.carouselContainer}>
                        <CouponCarousel
                          coupon={selectedCoupon}
                          coupons={discounts.map((discountMapItem) => ({
                            _id: discountMapItem._id,
                            time: `${new Date(
                              discountMapItem.validFromTime
                            ).getHours()}:${
                              10 <
                              new Date(
                                discountMapItem.validFromTime
                              ).getMinutes()
                                ? new Date(
                                    discountMapItem.validFromTime
                                  ).getMinutes()
                                : "0" +
                                  new Date(
                                    discountMapItem.validFromTime
                                  ).getMinutes()
                            }`,
                            amount: discountMapItem.percentDiscount * 100,
                          }))}
                          onSelect={handleSelectCoupon}
                        />
                      </View>
                    </View>
                  </View>
                )}
              </>
            ) : (
              <>
                <View>
                  <Image
                    source={{ uri: merchant.imageUrls[0] }}
                    style={styles.image}
                  />
                  <Pressable
                    onPress={() => NavigationService.goBack()}
                    style={{
                      position: "absolute",
                      top: 48,
                      paddingLeft: 16,
                      margin: 8,
                    }}
                  >
                    <AntDesign name="arrowleft" size={24} color="black" />
                  </Pressable>
                </View>
                <View style={styles.sectionContainer}>
                  <View style={styles.sectionBodyContainer}>
                    <View style={{ marginTop: -64 }}>
                      <RestaurantDescription
                        name={merchant.name}
                        address={merchant.address}
                        cuisineType={merchant.cuisineType}
                        reservationNumber={
                          consumerDiscounts.filter(
                            (consumerDiscountFileterItem) =>
                              consumerDiscountFileterItem.status === "upcoming"
                          ).length
                        }
                        cost={merchant.cost}
                        rating={
                          ratings.reduce(
                            (totalRating, rating) =>
                              totalRating + rating.rating,
                            0
                          ) / ratings.length || 0
                        }
                        reviewNumber={ratings.length}
                      />
                    </View>
                    <View style={styles.segmentContainer}>
                      <Segment
                        option={option}
                        options={options}
                        onSelect={handleSelectSegment}
                      />
                    </View>
                    {discounts.length !== 0 && (
                      <View style={styles.carouselContainer}>
                        <CouponCarousel
                          coupon={selectedCoupon}
                          coupons={discounts.map((discountMapItem) => ({
                            _id: discountMapItem._id,
                            time: `${new Date(
                              discountMapItem.validFromTime
                            ).getHours()}:${
                              10 <
                              new Date(
                                discountMapItem.validFromTime
                              ).getMinutes()
                                ? new Date(
                                    discountMapItem.validFromTime
                                  ).getMinutes()
                                : "0" +
                                  new Date(
                                    discountMapItem.validFromTime
                                  ).getMinutes()
                            }`,
                            amount: discountMapItem.percentDiscount * 100,
                          }))}
                          onSelect={handleSelectCoupon}
                        />
                      </View>
                    )}
                  </View>
                </View>
              </>
            )}
            <View
              onLayout={(event: LayoutChangeEvent) =>
                setMenuY(isZoomed ? event.nativeEvent.layout.y : undefined)
              }
              style={styles.sectionContainer}
            >
              <View>
                <Typography variant="title5">Menu</Typography>
              </View>
              {menuDiscounts.filter((menuDiscountFilterItem) =>
                selectedCoupon
                  ? menuDiscountFilterItem.discount._id === selectedCoupon?._id
                  : true
              ).length !== 0 ? (
                <View style={styles.sectionBodyContainer}>
                  {menuDiscounts
                    .filter((menuDiscountFilterItem) =>
                      selectedCoupon
                        ? menuDiscountFilterItem.discount._id ===
                          selectedCoupon?._id
                        : true
                    )
                    .map((menuDiscountMapItem, menuDiscountMapItemIndex) => (
                      <View
                        style={[
                          styles.menuContainer,
                          menuDiscountMapItemIndex !==
                            menuDiscounts.length - 1 && {
                            borderBottomWidth: 1,
                          },
                        ]}
                        key={menuDiscountMapItemIndex}
                      >
                        <View style={{ flex: 7, gap: 4 }}>
                          <Typography>
                            {menuDiscountMapItem.menu.name}
                          </Typography>
                          <View style={{ flexDirection: "row", gap: 16 }}>
                            <Typography
                              variant="bodySm"
                              color="subtle"
                              otherStyle={{
                                textDecorationLine: "line-through",
                              }}
                            >
                              $
                              {(
                                menuDiscountMapItem.menu.originalPrice *
                                menuDiscountMapItem.discount.percentDiscount
                              ).toFixed(2)}
                            </Typography>
                            <Typography variant="bodySm" color="subtle">
                              ${menuDiscountMapItem.menu.originalPrice}
                            </Typography>
                          </View>
                          <Typography variant="bodySm" color="subtle">
                            {menuDiscountMapItem.menu.description}
                          </Typography>
                        </View>
                        <View style={{ flex: 3 }}>
                          <Image
                            source={{ uri: menuDiscountMapItem.menu.imageUrl }}
                            style={styles.menuImage}
                          />
                        </View>
                      </View>
                    ))}
                </View>
              ) : (
                <Typography>No results</Typography>
              )}
            </View>
            <View
              onLayout={(event: LayoutChangeEvent) =>
                setRatingsY(isZoomed ? event.nativeEvent.layout.y : undefined)
              }
              style={styles.sectionContainer}
            >
              <View>
                <Typography variant="title5">Reviews</Typography>
              </View>
              <View style={styles.sectionBodyContainer}>
                <View style={styles.ratingContainer}>
                  <View>
                    <Typography variant="title3" weight="700">
                      {(
                        ratings.reduce(
                          (totalRating, rating) => totalRating + rating.rating,
                          0
                        ) / ratings.length || 0
                      ).toFixed(1)}
                    </Typography>
                    <Rating
                      type="custom"
                      ratingCount={5}
                      startingValue={
                        ratings.reduce(
                          (totalRating, rating) => totalRating + rating.rating,
                          0
                        ) / ratings.length || 0
                      }
                      imageSize={16}
                      tintColor="#FAFAFA"
                      ratingBackgroundColor="lightgray"
                      ratingColor="orange"
                      readonly
                    />
                    <Typography variant="bodyXs" color="subtle">
                      {ratings.length} Ratings
                    </Typography>
                  </View>
                  <View style={styles.divider}></View>
                  <View style={{ flex: 1 }}>
                    <RatingBars
                      ratingNumbers={Array.from(
                        { length: 5 },
                        (_, index) => index + 1
                      ).map((_, index) =>
                        ratings
                          .filter((rating) => rating.rating === index + 1)
                          .reduce(
                            (totalRatingNumber, rating) =>
                              totalRatingNumber + 1,
                            0
                          )
                      )}
                    />
                  </View>
                </View>
                {ratings.length !== 0 ? (
                  <View>
                    {ratings.map((ratingMapItem, ratingMapItemIndex) => (
                      <View
                        style={styles.reviewContainer}
                        key={ratingMapItemIndex}
                      >
                        <ReviewCard
                          avatarImageUrl={`https://picsum.photos/360?random=${
                            ratingMapItemIndex + 1
                          }`}
                          userName={`${ratingMapItem.consumer.user.firstName} ${ratingMapItem.consumer.user.lastName}`}
                          postedDate={new Date(ratingMapItem.createdAt)}
                          rating={ratingMapItem.rating}
                          content={ratingMapItem.comment}
                        />
                      </View>
                    ))}
                  </View>
                ) : (
                  <Typography>No results</Typography>
                )}
              </View>
            </View>
            <View
              onLayout={(event: LayoutChangeEvent) =>
                setDetailsY(isZoomed ? event.nativeEvent.layout.y : undefined)
              }
              style={styles.sectionContainer}
            >
              <View>
                <Typography variant="title5">Details</Typography>
              </View>
              <View style={styles.sectionBodyContainer}>
                <RestaurantDetail
                  address={merchant.address}
                  latitude={49.22442010000001}
                  longitude={-123.1088805}
                  cuisineType={merchant.cuisineType}
                  operatingTimes={merchant.operatingTimes}
                />
              </View>
            </View>
          </>
        )}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          text="Next"
          onPress={handleNext}
          takeFullWidth
          isDisabled={discounts.length !== 0 && selectedCoupon ? false : true}
        />
      </View>
    </>
  );
};

export default RestaurantProfile;
