import React from "react";
import { render } from "@testing-library/react-native";
import List from "./index";

describe("List component", () => {
  it("renders title correctly", () => {
    const { getByText } = render(<List title="List Title" />);
    expect(getByText("List Title")).toBeTruthy();
  });
});
