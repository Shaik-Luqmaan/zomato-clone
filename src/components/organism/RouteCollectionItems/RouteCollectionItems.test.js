import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import RouteCollectionItems from "./RouteCollectionItems";
import renderer from "react-test-renderer";

it("renders snapshot correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <RouteCollectionItems />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders RouteCollectionItems without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <RouteCollectionItems />
    </BrowserRouter>,
    div
  );
});