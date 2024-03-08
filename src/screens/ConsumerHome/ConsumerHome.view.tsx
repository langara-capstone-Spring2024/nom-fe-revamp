import { View, Text } from "react-native";
import createStyles from "./ConsumerHome.style";
import { ConsumerHomeGeneratedProps } from "./ConsumerHome.props";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import RestaurantCard from "../../components/base/RestaurantCard";
import TextInputField from "../../components/base/TextInputField";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

const ConsumerHome = (props: ConsumerHomeGeneratedProps) => {
  const { keyword, setKeyword, merchants } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ marginVertical: 16, gap: 16 }}
    >
      <View style={styles.serchContainer}>
        <TextInputField
          value={keyword}
          leftIcon={<Ionicons name="search" size={24} />}
          setValue={setKeyword}
          rounded
        />
      </View>
      {merchants && (
        <View style={styles.merchantsContainer}>
          {merchants.map((merchant, index) => (
            <RestaurantCard
              imageUrl={merchant.imageUrls[0]}
              restaurantName={merchant.name}
              cost={Number(merchant.cost)}
              rating={4.7}
              cuisineType={merchant.cuisineType}
              distance="3.7km"
              cityName="Vancouver"
              coupons={[]}
              key={index}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default ConsumerHome;
