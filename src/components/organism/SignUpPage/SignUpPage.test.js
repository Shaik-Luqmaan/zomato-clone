import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import SignUpPage from "./SignUpPage";
import renderer from "react-test-renderer";

it("renders snapshot correctly", () => {
  const tree = renderer.create(<SignUpPage />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders componentwithout crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SignUpPage />, div);
});
