import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import {Redirect} from "react-router";

import LoginContainer from './containers/LoginContainer';
import DashboardContainer from './containers/DashboardContainer';
//import { requirePropFactory } from '@material-ui/core';

function App() {
  return (
      <Router>
            <Switch>
                <Route path="/login" component={LoginContainer}></Route>
                <Route path="/dashboard/:id" component={DashboardContainer}></Route>
                <Redirect from="*" to="/login"></Redirect> 
            </Switch>

            
      </Router>
    
  )
}

export default App;
