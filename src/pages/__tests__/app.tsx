import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { App } from "../app";

it("mounted text", () => {
  const { getByTestId } = render(<App></App>);
  expect(getByTestId("wrapper")).toHaveTextContent("mounted");
});
