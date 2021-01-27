import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import LocationTemplate from "./LocationTemplate";
import renderer from "react-test-renderer";

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <LocationTemplate />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders LocationTemplate without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <LocationTemplate />
    </BrowserRouter>,
    div
  );
});