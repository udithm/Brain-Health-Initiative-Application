import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import {Redirect} from "react-router";

import LoginContainer from './containers/LoginContainer';
import DashboardContainer from './containers/DashboardContainer';
import ChangePasswordContainer from './containers/ChangePasswordContainer';
import MyProfileContainer from './containers/MyProfileContainer';
import ProtectedRoute from './ProtectedRoute';
import CreateContainer from './containers/CreateContainer';
import { AddAdminOrgView } from './views/AddAdminOrgView';
import { AddAdminView } from './views/AddAdminView';
import { AddHospitalView } from './views/AddHospitalView';
import { AddDoctorView } from './views/AddDoctorView';
import { PatientOptionsView } from './views/PatientOptionsView';


function App() {
  return (
      <Router>
            <Switch>
                <Route path="/login" component={LoginContainer}></Route>
                <ProtectedRoute path="/dashboard/" component={DashboardContainer}></ProtectedRoute>
                <ProtectedRoute path="/changePassword" component={ChangePasswordContainer}></ProtectedRoute>
                <ProtectedRoute path="/myProfile" component={MyProfileContainer}></ProtectedRoute>
                <ProtectedRoute path="/create" component={CreateContainer}></ProtectedRoute>
                <ProtectedRoute path="/addHospital" component={AddHospitalView}></ProtectedRoute>
                <ProtectedRoute path="/addDoctor" component={AddDoctorView}></ProtectedRoute>
                <ProtectedRoute path="/addAdmin" component={AddAdminView}></ProtectedRoute>
                <ProtectedRoute path="/addAdminOrg" component={AddAdminOrgView}></ProtectedRoute>
                <ProtectedRoute path="/patientOptions" component={PatientOptionsView}></ProtectedRoute>
                <Redirect from="*" to="/dashboard"></Redirect> 
            </Switch>
      </Router>
  )
}

export default App;
