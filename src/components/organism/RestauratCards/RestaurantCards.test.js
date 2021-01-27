import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCards from "./RestaurantCards";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders RestaurantItems snapshot correctly", () => {
  const tree = renderer.create(<RestaurantCards />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders RestaurantItems without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RestaurantCards />, div);
});