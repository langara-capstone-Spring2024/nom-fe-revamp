import { View, DimensionValue } from "react-native";
import { RatingBarsProps } from "./RatingBars.props";
import createStyles from "./RatingBars.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";

const RatingBars = (props: RatingBarsProps) => {
  const { ratingNumbers } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const totalNumber = ratingNumbers
    .reverse()
    .reduce(
      (totalRatingNumber, ratingNumber) => totalRatingNumber + ratingNumber,
      0
    );

  return (
    <View style={styles.listCcontainer}>
      {ratingNumbers.map((ratingNumber, index) => (
        <View style={styles.itemContainer} key={index}>
          <View style={styles.numberContainer}>
            <Typography>{ratingNumbers.length - index}</Typography>
          </View>
          <View style={styles.barContainer}>
            <View
              style={[
                styles.bar,
                { width: "100%", backgroundColor: "#D9D9D9" },
              ]}
            ></View>
            <View
              style={[
                styles.bar,
                {
                  backgroundColor: "#F5860A",
                  width: ((ratingNumber / totalNumber) * 100 +
                    "%") as DimensionValue,
                },
              ]}
            ></View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default RatingBars;
