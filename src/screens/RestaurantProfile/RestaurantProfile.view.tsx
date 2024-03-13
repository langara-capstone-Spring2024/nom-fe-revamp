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
import { Arrow } from "../../components/base/SVG";
import NavigationService from "../../navigation/NavigationService";
import Button from "../../components/base/Button";
import Segment from "../../components/base/Segment";
import { useNavigation } from "@react-navigation/native";
import { Option } from "../../types";

const RestaurantProfile = (props: RestaurantProfileGeneratedProps) => {
  const {
    isRefreshing,
    merchant,
    discounts,
    ratings,
    handleRefresh,
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
            style={{ marginLeft: 16, transform: [{ rotate: "180deg" }] }}
          >
            <Arrow />
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
                          coupons={discounts.map((discount) => ({
                            time: `${new Date(
                              discount.validFromTime
                            ).getHours()}:${
                              10 < new Date(discount.validFromTime).getMinutes()
                                ? new Date(discount.validFromTime).getMinutes()
                                : "0" +
                                  new Date(discount.validFromTime).getMinutes()
                            }`,
                            amount: discount.percentDiscount * 100,
                          }))}
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
                      top: 64,
                      left: 16,
                    }}
                  >
                    <Arrow style={{ transform: [{ rotate: "180deg" }] }} />
                  </Pressable>
                </View>
                <View style={styles.sectionContainer}>
                  <View style={styles.sectionBodyContainer}>
                    <View style={{ marginTop: -64 }}>
                      <RestaurantDescription
                        name={merchant.name}
                        address={merchant.address}
                        cuisineType={merchant.cuisineType}
                        reservationNumber={234}
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
                          coupons={discounts.map((discount) => ({
                            time: `${new Date(
                              discount.validFromTime
                            ).getHours()}:${
                              10 < new Date(discount.validFromTime).getMinutes()
                                ? new Date(discount.validFromTime).getMinutes()
                                : "0" +
                                  new Date(discount.validFromTime).getMinutes()
                            }`,
                            amount: discount.percentDiscount * 100,
                          }))}
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
              <View style={styles.sectionBodyContainer}></View>
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
                {ratings.length !== 0 && (
                  <View>
                    {ratings.map((rating, index) => (
                      <View style={styles.reviewContainer} key={index}>
                        <ReviewCard
                          avatarImageUrl={`https://picsum.photos/360?random=${
                            index + 1
                          }`}
                          userName={`${rating.consumer.user.firstName} ${rating.consumer.user.lastName}`}
                          postedDate={new Date(rating.createdAt)}
                          rating={rating.rating}
                          content={rating.comment}
                        />
                      </View>
                    ))}
                  </View>
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
          isDisabled={discounts.length !== 0 ? false : true}
        />
      </View>
    </>
  );
};

export default RestaurantProfile;
