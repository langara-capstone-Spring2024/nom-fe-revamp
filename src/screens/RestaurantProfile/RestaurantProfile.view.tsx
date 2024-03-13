import {
  View,
  ScrollView,
  Image,
  RefreshControl,
  Pressable,
} from "react-native";
import createStyles from "./RestaurantProfile.style";
import { RestaurantProfileGeneratedProps } from "./RestaurantProfile.props";
import React, { useMemo } from "react";
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

const RestaurantProfile = (props: RestaurantProfileGeneratedProps) => {
  const {
    isRefreshing,
    merchant,
    discounts,
    ratings,
    handleRefresh,
    handleNext,
  } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <>
      <ScrollView
        style={styles.container}
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
                        (totalRating, rating) => totalRating + rating.rating,
                        0
                      ) / ratings.length || 0
                    }
                    reviewNumber={ratings.length}
                  />
                </View>
                <View style={{ marginHorizontal: -16 }}>
                  <CouponCarousel
                    coupons={discounts.map((discount) => ({
                      time: `${new Date(discount.validFromTime).getHours()}:${
                        10 < new Date(discount.validFromTime).getMinutes()
                          ? new Date(discount.validFromTime).getMinutes()
                          : "0" + new Date(discount.validFromTime).getMinutes()
                      }`,
                      amount: discount.percentDiscount * 100,
                    }))}
                  />
                </View>
              </View>
            </View>
            <View style={styles.sectionContainer}>
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
              </View>
            </View>
            <View style={styles.sectionContainer}>
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
