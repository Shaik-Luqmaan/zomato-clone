import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom"
import renderer from 'react-test-renderer';
import RestaurantCard from './RestaurantCard';

afterEach(cleanup);

it("matches snapshot",()=>{
    const tree = renderer.create(<RestaurantCard />).toJSON();
    expect(tree).toMatchSnapshot();
})

it("renders component without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<RestaurantCard />, div)
})

it("renders component correctly",()=>{
    const args={
        title: "Cafe Bahar",
        img: "https://b.zmtcdn.com/data/pictures/chains/9/18434969/583c51d53a841df904e7e4cc0ba19462_o2_featured_v2.jpg",
        rating : 4.5,
        reviews : "13k",
        cuisine : "Mughlai, North Indian, Chineese, Biryani, Sea Food",
        cost: 150,
        time: 44, 
    };
    const{getByTestId} = render(<RestaurantCard {...args} /> )

    expect(getByTestId('title')).toHaveTextContent(args.title);
    expect(getByTestId('rating')).toHaveTextContent(args.rating);
    expect(getByTestId('reviews')).toHaveTextContent(args.reviews);
    expect(getByTestId('cuisine')).toHaveTextContent(args.cuisine);
    expect(getByTestId('cost')).toHaveTextContent(args.cost);

})

it("matches snapshot 2",()=>{
    const args={
        title: "Cafe Bahar",
        img: "https://b.zmtcdn.com/data/pictures/chains/9/18434969/583c51d53a841df904e7e4cc0ba19462_o2_featured_v2.jpg",
        rating : 4.5,
        reviews : "13k",
        cuisine : "Mughlai, North Indian, Chineese, Biryani, Sea Food",
        cost: 150,
        time: 44, 
    };
    const tree = renderer.create(<RestaurantCard  { ...args}/>).toJSON();
    expect(tree).toMatchSnapshot();
})