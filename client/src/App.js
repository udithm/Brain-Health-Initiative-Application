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
import {AnalyticsTableView} from "./views/AnalyticsTableView";
import ViewConsultationContainer from "./containers/ViewConsultationContainer";
import ViewAllConsultationsContainer from "./containers/ViewAllConsultationsContainer";
import ViewAllConsultationsByDoctorContainer from "./containers/ViewAllConsultationByDoctor";
import {AnalyticsContainer} from "./containers/AnalyticsContainer";
import {DistrictHospitalAnalyticsContainer} from "./containers/DistrictHospitalAnalyticsContainer";
import PrintContainer from './containers/PrintContainer';
import {ReferalAnalyticsContainer} from "./containers/ReferalAnalyticsContainer";
import {Icd10AnalyticsContainer} from "./containers/Icd10AnalyticsContainer";
import {StateDoctorAnalyticsContainer} from "./containers/StateDoctorAnalysisContainer"
import {useSelector} from "react-redux"
function App() {
  const authState = useSelector((state) => state.AuthReducer);
  const role = localStorage.getItem("role");
  console.log(role);
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginContainer}></Route>

        <ProtectedRoute path="/changePassword" component={ChangePasswordContainer}></ProtectedRoute>
        <ProtectedRoute path="/myProfile" component={MyProfileContainer}></ProtectedRoute>
        <ProtectedRoute path="/dashboard/" component={DashboardContainer}></ProtectedRoute>
        {role === "ADMIN" ? 
        <>
          <ProtectedRoute path="/create" component={CreateContainer}></ProtectedRoute>
          <ProtectedRoute path="/addHospital" component={AddHospitalView}></ProtectedRoute>
          <ProtectedRoute path="/addDoctor" component={AddDoctorView}></ProtectedRoute>
          <ProtectedRoute path="/addAdmin" component={AddAdminView}></ProtectedRoute>
          <ProtectedRoute path="/addAdminOrg" component={AddAdminOrgView}></ProtectedRoute>
          <ProtectedRoute path="/analyticsTable" component={AnalyticsTableView}></ProtectedRoute>
          <ProtectedRoute path="/analytics" component={AnalyticsContainer}></ProtectedRoute>
          <ProtectedRoute path="/referalAnalytics" component={ReferalAnalyticsContainer}></ProtectedRoute>
          <ProtectedRoute path="/districtHospitals" component={DistrictHospitalAnalyticsContainer}></ProtectedRoute>
          <ProtectedRoute path="/referalAnalytics" component={ReferalAnalyticsContainer}></ProtectedRoute>
          <ProtectedRoute path="/icd10Analytics" component={Icd10AnalyticsContainer}></ProtectedRoute>
          <ProtectedRoute path="/stateDoctorAnalytics" component={StateDoctorAnalyticsContainer}></ProtectedRoute>
            {console.log("app",role === "ADMIN" , role)}
          {/* <Redirect from="*" to="/dashboard"></Redirect> */}
        </>
        :
        <>
        <ProtectedRoute path="/patientOptions" component={PatientOptionsView}></ProtectedRoute>
          <ProtectedRoute path="/refered" component={ReferedContainer}></ProtectedRoute>
          <ProtectedRoute path="/addPatient" component={AddPatientDetailsContainer}></ProtectedRoute>
          <ProtectedRoute path="/searchPatient" component={SearchPatientContainer}></ProtectedRoute>
          <ProtectedRoute path="/viewPatientDashboard" component={ViewPatientDashboard}></ProtectedRoute>
          <ProtectedRoute path="/viewPatient/:id" component={ViewPatientDetailsContainer}></ProtectedRoute>
          <ProtectedRoute path="/addConsultation/:id" component={AddConsultationContainer}></ProtectedRoute>
          <ProtectedRoute path="/viewConsultation/:pid/:cid" component={ViewConsultationContainer}></ProtectedRoute>
          <ProtectedRoute path="/doctorConsultations" component={ViewAllConsultationsByDoctorContainer}></ProtectedRoute>
          <ProtectedRoute path="/viewPastConsultations/:id" component={ViewAllConsultationsContainer}></ProtectedRoute>
          {console.log("app",role === "ADMIN" , role)}

          {/* <Redirect from="*" to="/dashboard"></Redirect> */}
        </>
        }
        <Redirect from="*" to="/dashboard"></Redirect>
        {/* <ProtectedRoute path="/print" component={PrintContainer}></ProtectedRoute> */}
        
      </Switch>
    </Router>
  )
}

export default App;
