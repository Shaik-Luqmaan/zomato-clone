import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom";
import LoginField from './LoginField'

afterEach(cleanup);

it("renders without crashing",()=>{
    const div = document.createElement('div');
    ReactDOM.render(<LoginField />, div);
})

it("renders login field correctly",()=>{
    const {getByTestId} = render(<LoginField />)
    expect(getByTestId('loginField').querySelector('input').value).toEqual('')
})