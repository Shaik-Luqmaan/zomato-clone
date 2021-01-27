import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom";
import InputField from './InputField'

afterEach(cleanup);

it("renders without crashing",()=>{
    const div = document.createElement('div');
    ReactDOM.render(<InputField />, div);
})

it("renders input field correctly",()=>{
    const {getByTestId} = render(<InputField />)
    expect(getByTestId('inputField').querySelector('input').value).toEqual('')
})