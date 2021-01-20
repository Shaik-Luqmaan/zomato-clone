import React from 'react';
import LocationTemplate from './LocationTemplate'

export default {
    title: 'templates/Location',
    component: LocationTemplate
}

const Template = (...args) => (
    <LocationTemplate {...args} />
);

export const Primary = Template.bind({});