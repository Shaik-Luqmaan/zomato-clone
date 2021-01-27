import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import CollectionCard from './CollectionCard';
import collection from '../../pictures/collection_1.jpg'
import renderer from 'react-test-renderer';

afterEach(cleanup);

it("matches snapshot",()=>{
    const args={
        text: "Most Searched 2020",
        placesCount : '28 Places',
        img: collection,
    };

    const tree = renderer.create(<CollectionCard {...args}/>).toJSON();
    expect(tree).toMatchSnapshot();
})

it("renders component without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<CollectionCard />, div)
})

it("renders component correctly",()=>{
    const args={
        text: "Most Searched 2020",
        placesCount : '28 Places',
        img: collection,
    };
    const{getByTestId} = render(<CollectionCard {...args} /> )
    expect(getByTestId("text")).toHaveTextContent(args.text);
    expect(getByTestId("place")).toHaveTextContent(args.placesCount);
})

it("matches snapshot 2",()=>{
    const tree = renderer.create(<CollectionCard/>).toJSON();
    expect(tree).toMatchSnapshot();
})