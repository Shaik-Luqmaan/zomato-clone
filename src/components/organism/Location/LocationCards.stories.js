import React from "react";
import LocationCards from "./LocationCards";

export default {
    title: "organisms/LocationCards",
    component: LocationCards,
}


const Template = ({...args})=>(
    <LocationCards {...args} />
);


export const Primary = Template.bind({});
Primary.args = {
   
}