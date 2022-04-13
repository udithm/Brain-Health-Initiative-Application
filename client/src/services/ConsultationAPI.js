import {
    addConsultationRequest,
    addConsultationSuccess,
    addConsultationFailure,
    getConsultationRequest,
    getConsultationSuccess,
    getConsultationFailure,
    setConsultation
} from "../actionCreators/ConsultationActions.js";
import { alertError, alertSuccess } from "../actionCreators/AlertActions";
import axios from "../common/config/AxiosConfig";


export const addConsultation = (consultation) => {
    return (dispatch) => {
        console.log(consultation)
        dispatch(addConsultationRequest()); 
        axios
            .post ("http://localhost:8080/api/v1/consultationrecords", consultation ) 
            .then ((res) => {
                dispatch(alertSuccess("Consultation Added Successfully!"));
                dispatch(addConsultationSuccess());
            })
            .catch((err)=>{
                dispatch(alertError(err.response.data.message));
                dispatch(addConsultationFailure());
            })
    }
}

export const getConsultations = (id) => {
    return (dispatch) => {
        dispatch(getConsultationRequest()); 
        axios
            .get ("http://localhost:8080/api/v1/consultationrecords/patientId/"+id) 
            .then ((res) => {
                dispatch(getConsultationSuccess(res.data));
            })
            .catch((err)=>{
                dispatch(getConsultationFailure(err.message));
                console.log("-----this is catch------", err);
            })
    }
}

export const setConsultationByAPI = (id) => {
    return (dispatch) => {
        axios
        .get ("http://localhost:8080/api/v1/consultationrecords/id/"+id) 
        .then ((res) => {
            dispatch(setConsultation(res.data));
        })
        .catch((err)=>{
            dispatch(getConsultationFailure(err.message));
            console.log("-----this is catch------", err);
        })
    }
}

export const setConsultationSelected = (consultation) => {
    console.log(consultation)
    return (dispatch) => {
        dispatch(setConsultation(consultation)); 
    }
}

// export const getCommonQuestionnaire = async () => {
//     axios
//     .get ("http://localhost:8080/api/v1/questionnaire/Common") 
//     .then ((res) => {
//         console.log(res.data)
//         return res.data;
//     })
//     .catch((err)=>{
//         return err.message;
//     })
// }
