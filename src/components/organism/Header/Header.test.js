import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "./Header";
import renderer from "react-test-renderer";

it("renders snapshot correctly", () => {
  const tree = renderer.create(
    <BrowserRouter>
        <Header />
    </BrowserRouter>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
        <Header />
    </BrowserRouter>
  , div);
});