import React from "react";
import CollectionItems from "./CollectionItems";


export default {
    title: "organisms/CollectionItems",
    component: CollectionItems,
}


const Template = (args)=>(
    <CollectionItems {...args} />
);


export const Primary = Template.bind({});
Primary.args = {
  
}