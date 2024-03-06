import React from "react";
import { render } from "@testing-library/react-native";
import Coupon from "./index";
import CouponCarousel from "./index";

describe("Coupon component", () => {
  const coupons = [
    { time: "1:30", amount: 15 },
    { time: "2:00", amount: 15 },
    { time: "2:30", amount: 20 },
    { time: "3:00", amount: 20 },
    { time: "3:30", amount: 20 },
    { time: "4:00", amount: 15 },
    { time: "4:30", amount: 15 },
  ];

  it("renders items correctly", () => {
    const { getByText, queryAllByText } = render(
      <CouponCarousel coupons={coupons} index={0} onSelect={() => null} />
    );
    expect(getByText("1:30")).toBeTruthy();
    expect(getByText("2:00")).toBeTruthy();
    expect(getByText("2:30")).toBeTruthy();
    expect(getByText("3:00")).toBeTruthy();
    expect(getByText("3:30")).toBeTruthy();
    expect(getByText("4:00")).toBeTruthy();
    expect(getByText("4:30")).toBeTruthy();
    expect(queryAllByText("15% OFF").length).toBe(4);
    expect(queryAllByText("20% OFF").length).toBe(3);
  });
});
