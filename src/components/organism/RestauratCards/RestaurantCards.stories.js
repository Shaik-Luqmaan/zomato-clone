import React from "react";
import RestaurantCards from "./RestaurantCards";

export default {
    title: "organisms/RestaurantCards",
    component: RestaurantCards,
}


const Template = ({...args})=>(
    <RestaurantCards {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    
}