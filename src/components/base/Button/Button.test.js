import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "./index";

describe("Button component", () => {
  it("renders text correctly", () => {
    const { getByText } = render(<Button text="Press Me" />);
    expect(getByText("Press Me")).toBeTruthy();
  });

  it("renders with different variants", () => {
    const { getByText } = render(
      <Button text="Primary Button" variant="primary" />
    );
    expect(getByText("Primary Button")).toBeTruthy();

    const { getByText: getByTextSecondary } = render(
      <Button text="Secondary Button" variant="secondary" />
    );
    expect(getByTextSecondary("Secondary Button")).toBeTruthy();
  });
});
