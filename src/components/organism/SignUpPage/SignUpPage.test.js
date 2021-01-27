import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import SignUpPage from "./SignUpPage";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import { render, fireEvent, cleanup, getByText } from "@testing-library/react";

it("renders snapshot correctly", () => {
  const tree = renderer.create(<SignUpPage />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders componentwithout crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SignUpPage />, div);
});

it("renders Signup correctly with email and password", () => {
  const { getByTestId } = render(<SignUpPage />);
  const email = getByTestId("email").querySelector("input");
  userEvent.type(email, "luqmaanshaik@gmail.com");
  expect(email.value).toEqual("luqmaanshaik@gmail.com");
  const password = getByTestId("password").querySelector("input");
  userEvent.type(password, "l5044117");
  expect(password.value).toEqual("l5044117");
  fireEvent.click(getByTestId("button"));
});
