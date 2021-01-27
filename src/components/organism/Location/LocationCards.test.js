import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom"
import renderer from 'react-test-renderer';
import LocationCards from './LocationCards';

afterEach(cleanup);

it("renders component without crashing",()=>{
    const div = document.createElement('div');
    ReactDOM.render(<LocationCards/>, div)
})

it("renders snapshot correctly", () => {
    const tree = renderer.create(<LocationCards />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  