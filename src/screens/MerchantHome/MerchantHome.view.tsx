import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import createStyles from "./MerchantHome.style";
import { MerchantHomeGeneratedProps } from "./MerchantHome.props";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import { theme as t } from "../../utils/Theme";
import Typography from "../../components/base/Typography";
import MerchantDashboard from "../../components/base/MerchantDashboard";
import OrdersImg from "../../../assets/Bookings.png";
import Ads from "../../../assets/Ads.png";
import Menu from "../../../assets/Menus.png";
import Promos from "../../../assets/Promotion.png";
import Profile from "../../../assets/Profile.png";
import Insight from "../../../assets/Insights.png";
import Articles from "../../components/base/Articles";
import Article1 from "../../../assets/Article1.png";
import Article2 from "../../../assets/Article2.png";
import NavigationService from "../../navigation/NavigationService";
import { Entypo } from "@expo/vector-icons";

const MerchantHome = (props: MerchantHomeGeneratedProps) => {
  const { merchantName } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require("../../../assets/merchant_bg.png")}
        style={styles.background}
      ></ImageBackground>
      <ScrollView>
        <View style={styles.headerContainer}>
          <View>
            <Typography variant="title2" color="white-strong" weight="700">
              Good Day!
            </Typography>
            <Typography color="white-strong">
              {merchantName}
              {""}
              <Entypo name="dot-single" size={16} color="white" />
              Vancouver
            </Typography>
          </View>
          <MerchantDashboard
            couponSoldToday={"36"}
            totalSold={"2.34k"}
            ratings={"4.6"}
            performance={"+7.3%"}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.menuNavigationContainer}>
            <TouchableOpacity
              style={styles.menuNavigation}
              onPress={() => NavigationService.navigate("Orders")}
              disabled
            >
              <View style={styles.menuNavImage}>
                <Image source={OrdersImg} />
              </View>
              <Typography variant="label2">Orders</Typography>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuNavigation}
              onPress={() => NavigationService.navigate("AdMaker")}
            >
              <View style={styles.menuNavImage}>
                <Image source={Ads} />
              </View>
              <Typography variant="label2">Ads</Typography>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuNavigation}
              onPress={() => NavigationService.navigate("Menu")}
            >
              <View style={styles.menuNavImage}>
                <Image source={Menu} />
              </View>
              <Typography variant="label2">Menu</Typography>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuNavigation}
              onPress={() => NavigationService.navigate("Promo")}
            >
              <View style={styles.menuNavImage}>
                <Image source={Promos} />
              </View>
              <Typography variant="label2">Promos</Typography>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuNavigation}
              onPress={() => NavigationService.navigate("RestaurantProfile")}
              disabled
            >
              <View style={styles.menuNavImage}>
                <Image source={Profile} />
              </View>
              <Typography variant="label2">Profile</Typography>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuNavigation} disabled>
              <View style={styles.menuNavImage}>
                <Image source={Insight} />
              </View>
              <Typography variant="label2">Insights</Typography>
            </TouchableOpacity>
          </View>
          <View style={styles.articleWrapper}>
            <Typography variant="title5">What's new?</Typography>
            <View style={styles.articles}>
              <Articles
                title={
                  "A Quick Guide to Navigate and Leverage Our\nApp Effectively."
                }
                imgSrc={Article1}
                link="Tap to know more"
              />
              <Articles
                title={
                  "Turn Downtime into Profits: How Off-Hour\nPromotions Boost Your Restaurant"
                }
                imgSrc={Article2}
                link="Tap to know more"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MerchantHome;
