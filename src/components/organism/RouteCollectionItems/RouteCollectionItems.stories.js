import React from "react";
import RouteCollectionItems from "./RouteCollectionItems"

export default {
    title: "organisms/RouteCollectionItems",
    component: RouteCollectionItems,
}


const Template = ({...args})=>(
    <RouteCollectionItems {...args} />
);


export const Primary = Template.bind({});
Primary.args = {
   
}