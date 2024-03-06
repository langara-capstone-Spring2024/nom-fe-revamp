import { View, LayoutChangeEvent } from "react-native";
import { CouponProps } from "./Coupon.props";
import createStyles from "./Coupon.style";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";
import { SvgXml } from "react-native-svg";
import { CouponBody } from "../../../svgs";

const Coupon = (props: CouponProps) => {
  const { time, amount, isSelected } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [width, setWidth] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [body, setBody] = useState<ReactNode | undefined>(undefined);

  const handleLayout = (event: LayoutChangeEvent) => {
    setWidth(Math.ceil(event.nativeEvent.layout.width));
    setHeight(event.nativeEvent.layout.height);
  };

  useEffect(() => {
    if (width && height) {
      if (isSelected) {
        setBody(<SvgXml xml={CouponBody(width, height, isSelected)} />);
      } else {
        setBody(<SvgXml xml={CouponBody(width, height, isSelected)} />);
      }
    }
  }, [width, height, isSelected]);

  return (
    <View style={{ width: width ? width : undefined }}>
      <View style={{ overflow: "hidden" }}>
        <View
          style={[
            styles.itemContainer,
            {
              backgroundColor: isSelected ? "#E51E35" : "#FFF0F1",
              borderColor: isSelected ? "#E51E35" : "#FF6173",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              paddingVertical: 6,
              marginBottom: -1,
            },
          ]}
        ></View>
      </View>
      <View onLayout={handleLayout} style={{ paddingHorizontal: 24 }}>
        <View style={{ position: "absolute" }}>{body && body}</View>
        <Typography
          variant="bodyXs"
          color={isSelected ? "white-strong" : "brand-strong"}
          alignment="center"
        >
          {time}
        </Typography>
        <Typography
          variant="bodyXs"
          color={isSelected ? "white-strong" : "brand-strong"}
          alignment="center"
        >
          {amount}% OFF
        </Typography>
      </View>
      <View style={{ overflow: "hidden" }}>
        <View
          style={[
            styles.itemContainer,
            {
              backgroundColor: isSelected ? "#E51E35" : "#FFF0F1",
              borderColor: isSelected ? "#E51E35" : "#FF6173",
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              paddingVertical: 6,
              marginTop: -1,
            },
          ]}
        ></View>
      </View>
    </View>
  );
};

export default Coupon;
