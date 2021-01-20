import React from 'react'
import RestaurantCard from './RestaurantCard'

export default {
    title: "molecules/RestaurantCards",
    component: RestaurantCard
  };

const Template = (args) => <RestaurantCard {...args}/>

export const Restaurant = Template.bind({});
Restaurant.args = {
    title: "Cafe Bahar",
    img: "https://b.zmtcdn.com/data/pictures/chains/9/18434969/583c51d53a841df904e7e4cc0ba19462_o2_featured_v2.jpg",
    rating : 4.5,
    reviews : "13k",
    cuisine : "Mughlai, North Indian, Chineese, Biryani, Sea Food",
    cost: 150,
    time: 44, 
}