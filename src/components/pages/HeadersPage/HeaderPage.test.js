import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import HeaderPage from "./HeaderPage";
import renderer from "react-test-renderer";

it("renders snapshot correctly", () => {
  const tree = renderer.create(
      <BrowserRouter>
        <HeaderPage />
      </BrowserRouter>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders HeaderPage without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <HeaderPage />
    </BrowserRouter>,
    div
  );
});