import React from 'react';
import HomePage from './components/pages/HomePage/HomePage';
import HeaderPage from './components/pages/HeadersPage/HeaderPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hyderabad/delivery" component={()=> <HeaderPage heading={0} />} /> 
        <Route exact path="/hyderabad/dine-out" component={()=> <HeaderPage heading={1} />} /> 
        <Route exact path="/hyderabad/night-life" component={()=> <HeaderPage heading={2} />} /> 
        </Switch>
    </BrowserRouter>
  )
}

export default App
