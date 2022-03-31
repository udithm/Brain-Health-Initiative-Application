import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router";

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
import { ReferedContainer } from './containers/ReferedContainer';
import AddPatientDetailsContainer from './containers/AddPatientDetailsContainer';
import ViewPatientDetailsContainer from './containers/ViewPatientDetailsContainer';
import SearchPatientContainer from './containers/SearchPatientContainer';
import AddConsultationContainer from "./containers/AddConsultationContainer";
import ViewPatientDashboard from "./views/ViewPatientDashboard";
import ViewConsultationContainer from "./containers/ViewConsultationContainer";
import ViewAllConsultationsContainer from "./containers/ViewAllConsultationsContainer";
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
        <ProtectedRoute path="/refered" component={ReferedContainer}></ProtectedRoute>
        <ProtectedRoute path="/addPatient" component={AddPatientDetailsContainer}></ProtectedRoute>
        <ProtectedRoute path="/searchPatient" component={SearchPatientContainer}></ProtectedRoute>
        <ProtectedRoute path="/viewPatientDashboard" component={ViewPatientDashboard}></ProtectedRoute>
        <ProtectedRoute path="/viewPatient/:id" component={ViewPatientDetailsContainer}></ProtectedRoute>
        <ProtectedRoute path="/addConsultation/:id" component={AddConsultationContainer}></ProtectedRoute>
        <ProtectedRoute path="/viewConsultation/:pid/:cid" component={ViewConsultationContainer}></ProtectedRoute>
        <ProtectedRoute path="/viewPastConsultations/:id" component={ViewAllConsultationsContainer}></ProtectedRoute>
        <Redirect from="*" to="/login"></Redirect>
      </Switch>
    </Router>
  )
}

export default App;
