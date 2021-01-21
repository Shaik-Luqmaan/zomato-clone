import React from 'react';
import HomePage from './components/pages/HomePage/HomePage';
import HeaderPage from './components/pages/HeadersPage/HeaderPage';
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import './App.css';
import auth from './auth/initAuth';

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.loggedIn() ? (
      React.createElement(component, props)
    ) : (
      <Redirect to="/?login" />
    )
  )}/>
)

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <PrivateRoute exact path="/hyderabad/delivery" component={()=> <HeaderPage heading={0} />} /> 
        <PrivateRoute exact path="/hyderabad/dine-out" component={()=> <HeaderPage heading={1} />} /> 
        <PrivateRoute exact path="/hyderabad/night-life" component={()=> <HeaderPage heading={2} />} /> 
        </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App
