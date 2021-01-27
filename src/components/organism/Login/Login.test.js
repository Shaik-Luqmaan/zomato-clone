import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Login from "./LoginPage";
import renderer from "react-test-renderer";

it("renders snapshot correctly", () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders componentwithout crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Login />, div);
});
