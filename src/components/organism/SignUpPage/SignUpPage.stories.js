import React from 'react';
import SignUpPage from './SignUpPage'

export default {
    title: 'organisms/SignUpPage',
    component: SignUpPage,
}

const Template = (args) => <SignUpPage  {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    
}