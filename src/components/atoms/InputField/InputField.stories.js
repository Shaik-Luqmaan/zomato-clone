import React from 'react'
import TextField from './InputField'

export default{
    title: 'Atoms/InputField',
    component: TextField,
    // decorators: [(Story) => <div style={{ margin: '7.8em' }}><Story/></div>]

}

const Template = (args) => <TextField  {...args}/>

export const Text = Template.bind({});
Text.args = {
    placeholder:"Search for Restaurant, cuisine or a dish", 
}