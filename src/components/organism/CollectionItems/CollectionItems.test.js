import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom"
import renderer from 'react-test-renderer';
import CollectionItems from './CollectionItems';

afterEach(cleanup);

it("renders component without crashing",()=>{
    const div = document.createElement('div');
    ReactDOM.render(<CollectionItems/>, div)
})

it("renders CollectionItems snapshot correctly", () => {
    const tree = renderer.create(<CollectionItems />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  