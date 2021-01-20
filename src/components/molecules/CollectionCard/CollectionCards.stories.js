import React from 'react';
import CollectionCard from './CollectionCard'
import collection from '../../pictures/collection_1.jpg'

export default {
    title: 'molecules/CollectionCard',
    component: CollectionCard
}

const Template = (args) => <CollectionCard {...args} />

export const ViewPageCollection = Template.bind({});
ViewPageCollection.args={
    text: "Most Searched 2020",
    placesCount : '28 Places',
    img: collection,
}

export const RoutePageCollection = Template.bind({});
RoutePageCollection.args={
    text: "Most Searched 2020",
    placesCount : '28 Places',
    img: collection,
    size: 'large'
}