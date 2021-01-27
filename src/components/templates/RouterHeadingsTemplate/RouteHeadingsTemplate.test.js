import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import RouterHeadingsTemplate from "./RouterHeadingsTemplate";
import renderer from "react-test-renderer";


it("renders RouterHeadingsTemplate without crashing ", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <RouterHeadingsTemplate />
      </BrowserRouter>,
      div
    );
  });
  

it("renders snapshot correctly 1", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <RouterHeadingsTemplate />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("render snapshot correctly 2", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <RouterHeadingsTemplate heading="1" />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders snapshot correctly 3", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <RouterHeadingsTemplate heading="2" />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});