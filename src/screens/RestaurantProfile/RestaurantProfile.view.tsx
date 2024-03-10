import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  RefreshControl,
  SafeAreaView,
} from "react-native";
import createStyles from "./RestaurantProfile.style";
import { RestaurantProfileGeneratedProps } from "./RestaurantProfile.props";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import RestaurantDescription from "../../components/base/RestaurantDescription";
import ReviewCard from "../../components/base/ReviewCard";
import Typography from "../../components/base/Typography";
import RestaurantDetail from "../../components/base/RestaurantDetail";

const RestaurantProfile = (props: RestaurantProfileGeneratedProps) => {
  const { isRefreshing, merchant, ratings, handleRefresh } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ gap: 16 }}
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
            </View>
            <View style={{ marginTop: -64, paddingHorizontal: 16 }}>
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
            <View style={styles.sectionContainer}>
              <View style={styles.titleContainer}>
                <Typography variant="title5">Reviews</Typography>
              </View>
              <View
                style={{ backgroundColor: "#FAFAFA", paddingHorizontal: 16 }}
              >
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
            <View style={styles.sectionContainer}>
              <View style={styles.titleContainer}>
                <Typography variant="title5">Detail</Typography>
              </View>
              {/* <RestaurantDetail
                address={merchant.address}
                latitude={49.22442010000001}
                longitude={-123.1088805}
              /> */}
            </View>
          </>
        )}
      </ScrollView>
      <Typography>e</Typography>
    </>
  );
};

export default RestaurantProfile;
