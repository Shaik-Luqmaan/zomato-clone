import React from "react";
import Typography from "./Typography";

export default {
  title: "Atoms/Typography",
  component: Typography,
};

const Template = (args) => (
    <Typography {...args}/>
);

export const Heading = Template.bind({});
Heading.args = {
  children: "Discover the best food & drinks in",
  variant: "h4",
};

export const City = Template.bind({});
City.args = {
  children: "Hyderabad",
  variant: "h5"
}

export const LogInOrOut = Template.bind({});
LogInOrOut.args = {
  children: "Login",
  variant: "h6"
}

export const AppLink = Template.bind({});
AppLink.args = {
  children: "Get the App",
  variant: "subtitle2",
  mode: "link",
}


export const ViewContent = Template.bind({});
ViewContent.args = {
  children: "Order Food Online",
  variant: "h6"
}