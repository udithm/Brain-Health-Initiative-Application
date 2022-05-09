import axios from "../common/config/AxiosConfig";
import {
    diseaseAnalyticsFailure,
    diseaseAnalyticsRequest,
    diseaseAnalyticsSuccess,
    phcAnalyticsRequest,
    phcAnalyticsSuccess,
    phcAnalyticsFailure,
    referalAnalyticsFailure,
    referalAnalyticsRequest,
    referalAnalyticsSuccess,
    districtHospitalAnalyticsSuccess,
    districtHospitalAnalyticsFailure,
    districtHospitalAnalyticsRequest,
    icd10AnalyticsFailure,
    icd10AnalyticsRequest,
    icd10AnalyticsSuccess,
    stateDoctorAnalyticsFailure,
    stateDoctorAnalyticsRequest,
    stateDoctorAnalyticsSuccess
} from "../actionCreators/AnalyticsActions";

import { alertError } from "../actionCreators/AlertActions";

export const DiseaseAnalytics = (district,history) => {
    return (dispatch) => {
        dispatch(diseaseAnalyticsRequest()); 
        axios
            .get ("/diseaseAnalytics", {district}) 
            .then ((res) => {
                if (!res.data) { throw new Error(" disease analytics fetch unsucessful.");} // this is added so mock server can be used(jugad)
                dispatch(diseaseAnalyticsSuccess(res.data));

            })
            .catch((err)=>{
                dispatch(diseaseAnalyticsFailure(err.message));
                dispatch(alertError(err.message));
                console.log("-----this is catch disease anal------", err);
                
            })
    }
}


export const phcAnalytics = () => {
    return (dispatch) => {
        dispatch(phcAnalyticsRequest()); 
        console.log("phccccccc anal req");
        axios
            .get ("/HospitalAnalysis") 
            .then ((res) => {
                console.log("phccccccc anal suqqq");
                if (!res.data) { throw new Error(" phc analytics fetch unsucessful.");} // this is added so mock server can be used(jugad)
                console.log("phccccccc anal suqqq",res);

                dispatch(phcAnalyticsSuccess(res.data));
                console.log("phccccccc anal suqqq",res.data);

            })
            .catch((err)=>{
                console.log("phccccccc anal fail",err);
                dispatch(phcAnalyticsFailure(err.message));
                dispatch(alertError(err.message));
                console.log("-----this is catch phc anali------", err);
                
            })
    }
}
export const districtHospitalAnalytics = (d) => {
    return (dispatch) => {
        dispatch(districtHospitalAnalyticsRequest()); 
        console.log("districtHospitalAnalyticsRequest");
        axios
            .get ("/DistrictHospitalAnalysis/"+d) //check name in backend
            .then ((res) => {
                console.log("districtHospitalAnalyticsSuccess");
                if (!res.data) { throw new Error(" phc analytics fetch unsucessful.");} // this is added so mock server can be used(jugad)
                console.log("districtHospitalAnalyticsSuccess",res);

                dispatch(districtHospitalAnalyticsSuccess(res.data));
                console.log("districtHospitalAnalyticsSuccess",res.data);

            })
            .catch((err)=>{
                console.log("districtHospitalAnalyticsFailure",err);
                dispatch(districtHospitalAnalyticsFailure(err.message));
                dispatch(alertError(err.message));
                console.log("-----this is catch phc anali------", err);
                
            })
    }
}

export const referalAnalytics = () => {
    return (dispatch) => {
        dispatch(referalAnalyticsRequest()); 
        console.log("refeeeral anal req");
        axios
            .get ("/referalAnalysis") 
            .then ((res) => {
                console.log("ref anal sucess",res);
                console.log("ref anal sucess",res.data);

                if (!res.data) { throw new Error(" referals analytics fetch unsucessful.");} // this is added so mock server can be used(jugad)
                dispatch(referalAnalyticsSuccess(res.data));

            })
            .catch((err)=>{
                console.log("ref anal fail",err);

                dispatch(referalAnalyticsFailure(err.message));
                dispatch(alertError(err.message));
                console.log("-----this is catch refeal anali------", err);
                
            })
    }
}

export const icd10Analytics = () => {
    return (dispatch) => {
        dispatch(icd10AnalyticsRequest()); 
        console.log("icd10 anal req");
        axios
            .get ("/ICD10CodeAnalysis") 
            .then ((res) => {
                console.log("icd10 anal suqqq");
                if (!res.data) { throw new Error(" phc analytics fetch unsucessful.");} // this is added so mock server can be used(jugad)
                console.log("icd10 anal suqqq",res);

                dispatch(icd10AnalyticsSuccess(res.data));
                console.log("icd10 anal suqqq",res.data);

            })
            .catch((err)=>{
                console.log("icd10 anal fail",err);
                dispatch(icd10AnalyticsFailure(err.message));
                dispatch(alertError(err.message));
                console.log("-----this is catch phc anali------", err);
                
            })
    }
}
export const stateDoctorAnalytics = (s) => {
    return (dispatch) => {
        dispatch(stateDoctorAnalyticsRequest()); 
        console.log("stateDoctorAnalyticsRequest");
        axios
            .get ("/StateDoctorAnalysis/"+s) 
            .then ((res) => {
                console.log("stateDoctorAnalyticsSuccess");
                if (!res.data) { throw new Error(" phc analytics fetch unsucessful.");} // this is added so mock server can be used(jugad)
                console.log("stateDoctorAnalyticsSuccess",res);

                dispatch(stateDoctorAnalyticsSuccess(res.data));
                console.log("stateDoctorAnalyticsSuccess",res.data);

            })
            .catch((err)=>{
                console.log("stateDoctorAnalyticsFailure",err);
                dispatch(stateDoctorAnalyticsFailure(err.message));
                dispatch(alertError(err.message));
                console.log("-----this is catch phc anali------", err);
                
            })
    }
}
