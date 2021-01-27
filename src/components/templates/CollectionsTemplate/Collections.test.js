import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import Collections from './Collections'
import renderer from "react-test-renderer";

it("renders snapshot correctly", () => {
  const tree = renderer
    .create(<Collections />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Collections without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Collections />,div);
});