import React from "react";
import RouteCollectionItems from "./RouteCollectionItems";
import { BrowserRouter } from 'react-router-dom';

export default {
    title: "organisms/RouteCollectionItems",
    component: RouteCollectionItems,
}


const Template = ({...args})=>(
    <BrowserRouter>
        <RouteCollectionItems {...args} />
    </BrowserRouter>
);


export const Primary = Template.bind({});
Primary.args = {
   
}