import { View, Text, ImageBackground } from "react-native";
import { MerchantDashboardProps } from "./MerchantDashboard.props";
import createStyles from "./MerchantDashboard.style";
import React, { useMemo, useState } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";
import { theme as t } from "../../../utils/Theme";
import SegmentedControl from "./../SegmentedControl";
import { Option } from "../../../types";

const MerchantDashboard = (props: MerchantDashboardProps) => {
  const { couponSoldToday, couponSoldMonth, totalSold, ratings, performance } =
    props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const option: Option = { label: "Today", value: "today" };

  const options: Option[] = [
    { label: "Today", value: "today" },
    { label: "Monthly", value: "monthly" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <ImageBackground
          source={require("../../../../assets/merchant_dashboard_bg.png")}
          style={styles.headerBg}
        >
          <View style={styles.content}>
            <View>
              <SegmentedControl options={options} option={option} />
            </View>
            <View style={styles.metrics}>
              <View style={styles.topMetric}>
                <Typography variant="title2">{couponSoldToday}</Typography>
                <Typography variant="bodySm" color="subtle">
                  Coupons Sold
                </Typography>
              </View>
              <View style={styles.bottomMetrics}>
                <View style={styles.metric}>
                  <Typography variant="title4" color="info-medium">
                    {totalSold}
                  </Typography>
                  <Typography variant="bodySm" color="subtle">
                    Total Sold
                  </Typography>
                </View>
                <View style={styles.withBorder} />
                <View style={styles.metric}>
                  <Typography variant="title4" color="warning-strong">
                    {ratings}
                  </Typography>
                  <Typography variant="bodySm" color="subtle">
                    Ratings
                  </Typography>
                </View>
                <View style={styles.withBorder} />
                <View style={styles.metric}>
                  <Typography variant="title4" color="success-medium">
                    {performance}
                  </Typography>
                  <Typography variant="bodySm" color="subtle">
                    Performance
                  </Typography>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default MerchantDashboard;
