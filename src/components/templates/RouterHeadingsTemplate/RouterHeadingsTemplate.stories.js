import React from "react";
import HeadingsTemplate from "./RouterHeadingsTemplate";

export default {
    title: "templates/Headings",
    component: HeadingsTemplate,
}


const Template = ({...args})=>(
    <HeadingsTemplate {...args} />
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