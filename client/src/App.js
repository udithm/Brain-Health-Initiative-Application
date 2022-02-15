import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import {Redirect} from "react-router";

import LoginContainer from './containers/LoginContainer';
import DashboardContainer from './containers/DashboardContainer';
import ChangePasswordContainer from './containers/ChangePasswordContainer';
import ProtectedRoute from './ProtectedRoute';
//import { requirePropFactory } from '@material-ui/core';

function App() {
  return (
      <Router>
            <Switch>
                <Route path="/login" component={LoginContainer}></Route>
                <ProtectedRoute path="/dashboard/" component={DashboardContainer}></ProtectedRoute>
                <ProtectedRoute path="/changePassword" component={ChangePasswordContainer}></ProtectedRoute>
                <Redirect from="*" to="/dashboard"></Redirect> 
            </Switch>

            
      </Router>
    
  )
}

export default App;
