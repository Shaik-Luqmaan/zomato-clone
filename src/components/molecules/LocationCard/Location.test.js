import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom"
import renderer from 'react-test-renderer';
import Location from './Location'

afterEach(cleanup);

it("renderer component correctly",()=>{
    const div = document.createElement('div');
    ReactDOM.render(< Location/>,div)
})

it("matches snapshot",()=>{
    const tree = renderer.create(<Location/>).toJSON();
    expect(tree).toMatchSnapshot();
})

it("renders component correctly", () => {
    const args = {
        placeName: "Tolichowki",
        placesCount: "500 places",
    };
    const { getByTestId } = render(<Location {...args} />);
    expect(getByTestId("location")).toHaveTextContent(
      args.placeName + " (" + args.placesCount + ")"
    );
  });

 