import React from "react";
import { render } from "@testing-library/react-native";
import Coupon from "./index";

describe("Coupon component", () => {
  it("renders content correctly", () => {
    const { getByText } = render(<Coupon time="1:30" amount={30} />);
    expect(getByText("1:30")).toBeTruthy();
    expect(getByText("30% OFF")).toBeTruthy();
  });
});
