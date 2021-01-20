import React from "react";
import HeaderPage from "./HeaderPage";

export default {
    title: "pages/HeaderPage",
    component: HeaderPage,
}


const Template = ({...args})=>(
    <HeaderPage {...args} />
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