import React from 'react'
import RouteCollection from './RouteCollection'

export default {
    title: "molecules/RouteCollection",
    component: RouteCollection
  };

const Template = (args) => <RouteCollection {...args}/>

export const RouteCard = Template.bind({});
RouteCard.args = {
    title: "Order Food Online",
    img: "https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png"
}