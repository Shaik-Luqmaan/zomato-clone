import React from "react";
import NightCollectionCards from "./NightCollectionCards";
import col4 from '../../pictures/lime.jpg';
import col5 from '../../pictures/bar.jpg';


export default {
    title: "organisms/NightCollectionCards",
    component: NightCollectionCards,
}


const Template = (args)=>(
    <NightCollectionCards {...args} />
);


export const Primary = Template.bind({});
Primary.args = {
   CollectionList: [
        {
            text: "Live Sports Screening",
            placesCount : '12 Places',
            img: "https://b.zmtcdn.com/data/collections/083468dbee9b51b10b7e6d8c9f091b4f_1554892925.jpg",
        },
        {
            
            text: "Happy Hours",
            placesCount : '8 Places',
            img: col4,
            
        },
        {
            
            text: "Best Bars and Pubs",
            placesCount : '12 Places',
            img: col5,
            
        },
    ]
}