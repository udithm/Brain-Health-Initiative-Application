import {
    getPatientsRequest,
    getPatientsSuccess,
    getPatientsFailure,
    addPatientRequest,
    addPatientSuccess,
    addPatientFailure,
    setPatient
} from "../actionCreators/PatientActions.js";
import { alertError, alertSuccess } from "../actionCreators/AlertActions";
import axios from "../common/config/AxiosConfig";


export const getPatients = (url) => {
    return (dispatch) => {
        dispatch(getPatientsRequest());
        axios
            .get(url)
            .then((res) => {
                dispatch(getPatientsSuccess(res.data));
            })
            .catch((err) => {
                dispatch(getPatientsFailure(err.message));
                console.log("-----this is catch------", err);
            })
    }
}

export const addPatient = (patientDetail) => {
    return (dispatch) => {
        dispatch(addPatientRequest());
        axios
            .post("/v1/patientdemographics", patientDetail)
            .then((res) => {
                dispatch(alertSuccess("Patient Details Added Successfully!"));
                dispatch(addPatientSuccess());
            })
            .catch((err) => {
                dispatch(alertError(err.response.data.message));
                dispatch(addPatientFailure());
            })
    }
}

export const setPatientByAPI = (id) => {
    return (dispatch) => {
        axios
        .get("/v1/patientdemographics/id/"+id)
        .then((res) => {
            dispatch(setPatient(res.data));
        })
        .catch((err) => {
            dispatch(getPatientsFailure(err.message));
            console.log("-----this is catch------", err);
        })
    }
}

export const setPatientSelected = (patientDetail) => {
    console.log(patientDetail)
    return (dispatch) => {
        dispatch(setPatient(patientDetail));
    }
}

export const getHospitalsforReferral = () => {
        axios
            .get("/getHospitalsforReferral")
            .then((res) => {
                if (!res.data) { throw new Error("No hospitals"); } // this is added so mock server can be used(jugad)
                // dispatch(getHospitalsforReferralSuccess(res.data));
                console.log("$$$$$$$$$$$$$$$$$$$gethospiiii",res);
                localStorage.setItem("getHospitalsforReferral",JSON.stringify(res.data));

            })
            .catch((err) => {
                console.log("-----this is catch------", err);
            })
}