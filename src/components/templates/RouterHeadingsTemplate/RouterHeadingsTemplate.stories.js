import React from "react";
import HeadingsTemplate from "./RouterHeadingsTemplate";
import { BrowserRouter } from 'react-router-dom';

export default {
    title: "templates/Headings",
    component: HeadingsTemplate,
}


const Template = ({...args})=>(
    <BrowserRouter> <HeadingsTemplate {...args} /> </BrowserRouter>
);


export const Delivery = Template.bind({});
Delivery.args = {
    heading: 0,
}

export const Dineout = Template.bind({});
Dineout.args = {
    heading: 1,
}

export const Nightlife = Template.bind({});
Nightlife.args = {
    heading: 2,
}