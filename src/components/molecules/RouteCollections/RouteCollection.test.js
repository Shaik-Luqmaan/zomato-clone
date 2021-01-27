import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom"
import renderer from 'react-test-renderer';
import RouteCollection from './RouteCollection';

afterEach(cleanup);

it("renders component without crashing",()=>{
    const div = document.createElement('div');
    ReactDOM.render(<RouteCollection />, div)
})

it("matches snapshot",()=>{
    const tree = renderer.create(<RouteCollection/>).toJSON();
    expect(tree).toMatchSnapshot();
})

it("render component correctly",()=>{
    const args ={
        title:"Order Food Online",
        img: "https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png"
    }
  
    const{getByTestId} = render(<RouteCollection {...args}/>);
    expect(getByTestId("sample")).toHaveTextContent(args.title);
})

it("matches snapshot 2",()=>{
    const args ={
        title:"Order Food Online",
        img: "https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png"
    }
    const tree = renderer.create(<RouteCollection {...args}/>).toJSON();
    expect(tree).toMatchSnapshot();
})
