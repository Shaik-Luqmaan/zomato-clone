import React from 'react';
import Location from './Location'

export default {
    title:'molecules/LocationCard',
    component: Location
}

const Template = (args) => <Location {...args} />
export const Primary = Template.bind({});
Primary.args = {
    placeName:'Tolichowki ',
    placesCount: '250 places'
}