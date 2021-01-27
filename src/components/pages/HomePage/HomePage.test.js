import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";
import renderer from "react-test-renderer";

it("renders HomePage without crashing", () => {
    const location = {
        hash: false,
        search: "token",
      };

  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <HomePage location={location}/>
    </BrowserRouter>,
    div
);
});

it("matches snapshot correctly", () => {
    const location = {
        hash: false,
        search: "token",
      };

  const tree = renderer
    .create(
      <BrowserRouter>
        <HomePage location={location}/>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});