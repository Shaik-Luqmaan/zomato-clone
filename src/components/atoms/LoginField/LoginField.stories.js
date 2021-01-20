import React from 'react';
import LoginField from './LoginField';

export default {
    title: 'Atoms/LoginField',
    component: LoginField,
}

const Template = (args) => <LoginField  {...args}/>

export const Text = Template.bind({});
Text.args = {
    placeholder:"Phone", 
}