import React from "react";
import HomeView from "./HomeView";
import BrowserRouter from "react-router-dom"

export default {
    title: "templates/Home",
    component: HomeView,
}


const Template = ({...args})=>(
    <BrowserRouter><HomeView {...args} /></BrowserRouter>
);


export const Primary = Template.bind({});
Primary.args = {
}