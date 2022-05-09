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
    referalAnalyticsSuccess
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


export const phcAnalytics = (history) => {
    return (dispatch) => {
        dispatch(phcAnalyticsRequest()); 
        axios
            .get ("/phcAnalytics") 
            .then ((res) => {
                if (!res.data) { throw new Error(" phc analytics fetch unsucessful.");} // this is added so mock server can be used(jugad)
                dispatch(phcAnalyticsSuccess(res.data));

            })
            .catch((err)=>{
                dispatch(phcAnalyticsFailure(err.message));
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