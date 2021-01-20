import React from 'react';
import SearchBar from './SearchBar';

export default {
    title: "organisms/SearchBar",
    component: SearchBar,
}

const Template = ({...args})=>(
    <SearchBar {...args} />
);

export const Primary = Template.bind({});
