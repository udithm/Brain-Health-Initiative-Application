import { 
    ADD_CONSULTATION_REQUEST,
    ADD_CONSULTATION_SUCCESS,
    ADD_CONSULTATION_FAILURE,
    GET_CONSULTATION_REQUEST,
    GET_CONSULTATION_SUCCESS,
    GET_CONSULTATION_FAILURE,
    SET_CURRENT_CONSULTATION,
    GET_REFERALS_FAILURE,
    GET_REFERALS_REQUEST,
    GET_REFERALS_SUCCESS
 } from "../common/constants/ActionConstants"; 

export const addConsultationRequest = () => ({
    type: ADD_CONSULTATION_REQUEST
})

export const addConsultationSuccess = () => {
    return {
        type: ADD_CONSULTATION_SUCCESS,
    }
}

export const addConsultationFailure = () => ({
    type: ADD_CONSULTATION_FAILURE,
})

export const getConsultationRequest = () => ({
    type: GET_CONSULTATION_REQUEST
})

export const getConsultationSuccess = (consultations) => {
    return {
        type: GET_CONSULTATION_SUCCESS,
        consultations: consultations
    }
}

export const getConsultationFailure = (err) => ({
    type: GET_CONSULTATION_FAILURE,
    err: err
})

export const setConsultation = (consultation) => {
    return {
        type: SET_CURRENT_CONSULTATION,
        consultation: consultation
    }
}

export const getReferalsRequest = () => ({
    type: GET_REFERALS_REQUEST
})

export const getReferalsSuccess = (referals) => {
    return {
        type: GET_REFERALS_SUCCESS,
        referals: referals
    }
}

export const getReferalsFailure = (err) => ({
    type: GET_REFERALS_FAILURE,
    err: err
})